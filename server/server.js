const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { gql, GraphQLClient } = require("graphql-request");
const { formatProduct, formatCollection } = require("./utils/formatters");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
const Shopify = require("shopify-api-node");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

const app = express();

// Verify environment variables
if (!process.env.SHOP_NAME || !process.env.STOREFRONT_API_KEY) {
  console.error(
    "Missing required environment variables: SHOP_NAME or STOREFRONT_API_KEY."
  );
  process.exit(1);
}

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  accessToken: process.env.ADMIN_ACCESS_TOKEN,
});

// Initialize GraphQL Client for Storefront API
const shopifyGraphQLUrl = `https://${process.env.SHOP_NAME}.myshopify.com/api/2024-10/graphql.json`;
const graphQLClient = new GraphQLClient(shopifyGraphQLUrl, {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API_KEY,
  },
});

// Helper function for GraphQL requests with error handling
const executeQuery = async (query, variables = {}) => {
  try {
    const data = await graphQLClient.request(query, variables);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// GraphQL Queries
const productQuery = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
      vendor
      images(first: 1) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            quantityAvailable
            priceV2 {
              amount
            }
            availableForSale
          }
        }
      }
    }
  }
`;

const productSearchQuery = gql`
  query searchProducts($query: String!) {
    products(first: 50, query: $query) {
      edges {
        node {
          id
          title
          description
          vendor
          tags
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                quantityAvailable
                priceV2 {
                  amount
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

const singleCollectionQuery = gql`
  query getCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      description
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            vendor
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  quantityAvailable
                  priceV2 {
                    amount
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
`;

const allCollectionsQuery = gql`
  query {
    collections(first: 50) {
      edges {
        node {
          id
          title
          handle
          description
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                vendor
                images(first: 1) {
                  edges {
                    node {
                      url
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      quantityAvailable
                      priceV2 {
                        amount
                      }
                      availableForSale
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

app.use(cors());

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    console.log("Received webhook with signature:", sig);

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
      console.log("Webhook event type:", event.type);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Full session data:", JSON.stringify(session, null, 2));

        try {
          console.log("Starting Shopify order creation...");

          const lineItems = await stripe.checkout.sessions.listLineItems(
            session.id
          );
          console.log("Line items:", JSON.stringify(lineItems.data, null, 2));

          if (!lineItems.data || !Array.isArray(lineItems.data)) {
            throw new Error("No valid line items found in session");
          }

          const orderItems = await Promise.all(
            lineItems.data.map(async (item) => {
              if (!item.price || !item.price.product) {
                console.error(
                  "Invalid line item structure:",
                  JSON.stringify(item, null, 2)
                );
                throw new Error("Line item missing price or product");
              }

              const product = await stripe.products.retrieve(
                item.price.product
              );
              console.log("Fetched product:", JSON.stringify(product, null, 2));

              return {
                id: product.metadata.id || "unknown",
                variantId: product.metadata.variantId || "unknown",
                title: product.metadata.title || item.description || "Untitled",
                description: product.metadata.description || "",
                image: product.metadata.image || "",
                price:
                  parseFloat(product.metadata.price) ||
                  item.amount_total / item.quantity / 100,
                quantity: parseInt(product.metadata.quantity) || item.quantity,
              };
            })
          );

          const shopifyOrder = await createShopifyOrder(session, orderItems);
          console.log("Shopify order created successfully:", shopifyOrder.id);

          await stripe.checkout.sessions.update(session.id, {
            metadata: {
              ...session.metadata,
              shopify_order_number: shopifyOrder.order_number.toString(),
            },
          });

          const orderDocId = `order_${shopifyOrder.order_number}`;
          await admin
            .firestore()
            .collection("orders")
            .doc(orderDocId)
            .set({
              stripeSessionId: session.id,
              shopifyOrderId: shopifyOrder.id.toString(),
              shopifyOrderNumber: shopifyOrder.order_number.toString(),
              total: (session.amount_total / 100).toFixed(2),
              customerEmail: session.customer_details.email,
              status: "Completed",
              items: orderItems,
              userId: session.metadata.userId || null,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              shippingAddress: {
                name: session.shipping_details.name,
                line1: session.shipping_details.address.line1,
                line2: session.shipping_details.address.line2 || "",
                city: session.shipping_details.address.city,
                state: session.shipping_details.address.state,
                postal_code: session.shipping_details.address.postal_code,
                country: session.shipping_details.address.country,
              },
            });

          if (session.metadata.userId) {
            const userRef = admin
              .firestore()
              .collection("users")
              .doc(session.metadata.userId);
            // Check if the user document exists
            const userDoc = await userRef.get();
            if (!userDoc.exists) {
              // Create a minimal user document if it doesn't exist
              await userRef.set({
                email: session.customer_details.email || "unknown",
                orders: [orderDocId],
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
              });
              console.log(
                `Created new user document for ${session.metadata.userId}`
              );
            } else {
              // Update existing user document
              await userRef.update({
                orders: admin.firestore.FieldValue.arrayUnion(orderDocId),
              });
              console.log(
                `Updated user ${session.metadata.userId} with order ${orderDocId}`
              );
            }
          } else {
            console.log("No userId provided, skipping user update");
          }

          console.log("Firebase order stored:", orderDocId);
        } catch (error) {
          console.error("Detailed error in order processing:", {
            message: error.message,
            stack: error.stack,
            response: error.response?.body,
          });
          return res.json({ received: true, error: error.message });
        }
      } else {
        console.log(`Unhandled event type: ${event.type}`);
      }

      res.json({ received: true });
    } catch (error) {
      console.error("Webhook verification error:", {
        message: error.message,
        stack: error.stack,
      });
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
);

// New Shopify webhook endpoint
app.post(
  "/shopify-webhook",
  express.raw({ type: "application/json" }), // Match Shopify's raw JSON payload
  async (req, res) => {
    // Verify Shopify webhook (HMAC signature)
    const hmac = req.headers["x-shopify-hmac-sha256"];
    const body = req.body.toString();
    const generatedHmac = require("crypto")
      .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_SECRET)
      .update(body)
      .digest("base64");

    if (hmac !== generatedHmac) {
      console.error("Shopify HMAC verification failed");
      return res.status(401).send("HMAC verification failed");
    }

    const shopifyOrder = JSON.parse(body);
    const orderDocId = `order_${shopifyOrder.order_number}`;
    let displayStatus;

    // Map Shopify events to your statuses
    if (shopifyOrder.cancelled_at) {
      displayStatus = "Cancelled";
    } else if (shopifyOrder.fulfillment_status === "fulfilled") {
      displayStatus = "Shipped"; // Could become "Delivered" with tracking later
    } else if (shopifyOrder.financial_status === "paid") {
      displayStatus = "Processing"; // Default after creation
    } else {
      displayStatus = "Processing"; // Fallback for early prototype
    }

    // Update Firebase with the new status
    try {
      await admin.firestore().collection("orders").doc(orderDocId).update({
        status: displayStatus,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`Updated order ${orderDocId} to status: ${displayStatus}`);
    } catch (error) {
      // If the order doesn’t exist yet (race condition), create it with minimal data
      await admin
        .firestore()
        .collection("orders")
        .doc(orderDocId)
        .set({
          shopifyOrderId: shopifyOrder.id.toString(),
          shopifyOrderNumber: shopifyOrder.order_number.toString(),
          total: shopifyOrder.total_price,
          customerEmail: shopifyOrder.email || "unknown",
          status: displayStatus,
          items: shopifyOrder.line_items.map((item) => ({
            title: item.title,
            price: item.price,
            quantity: item.quantity,
          })),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      console.log(
        `Created and updated order ${orderDocId} to status: ${displayStatus}`
      );
    }

    res.status(200).send("Webhook received");
  }
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Shopify Storefront API Express Server");
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const globalId = `gid://shopify/Product/${id}`;
  const result = await executeQuery(productQuery, { id: globalId });
  if (result.success) {
    const formattedProduct = formatProduct(result.data.product);
    res.json(formattedProduct);
  } else {
    res.status(500).json({ success: false, error: result.error });
  }
});

app.get("/collections", async (req, res) => {
  const result = await executeQuery(allCollectionsQuery);
  if (result.success) {
    const formattedCollections = result.data.collections.edges.map((edge) =>
      formatCollection(edge.node)
    );
    res.json(formattedCollections);
  } else {
    res.status(500).json({ success: false, error: result.error });
  }
});

app.get("/collections/:id", async (req, res) => {
  const { id } = req.params;
  const globalId = `gid://shopify/Collection/${id}`;
  const result = await executeQuery(singleCollectionQuery, { id: globalId });

  if (result.success) {
    const formattedCollection = formatCollection(result.data.collection);
    res.json(formattedCollection);
  } else {
    res.status(500).json({ success: false, error: result.error });
  }
});

app.get("/search/:query", async (req, res) => {
  const { query } = req.params;
  const result = await executeQuery(productSearchQuery, { query });
  if (result.success) {
    const formattedProducts = result.data.products.edges.map((edge) =>
      formatProduct(edge.node)
    );
    res.json(formattedProducts);
  } else {
    res.status(500).json({ success: false, error: result.error });
  }
});

// Now all other routes will have access to parsed JSON body
app.post("/create-checkout-session", async (req, res) => {
  const { cartItems, userId } = req.body;

  if (!cartItems?.length) {
    return res.status(400).json({
      success: false,
      error: "Cart is empty",
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image], // Stripe supports an array of image URLs
            metadata: {
              id: item.id,
              variantId: item.variantId,
              title: item.title,
              description: item.description,
              image: item.image, // Single image URL for simplicity
              price: item.price.toString(), // Store as string to avoid float issues
              quantity: item.quantity.toString(), // Store quantity here too
            },
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      payment_intent_data: {
        setup_future_usage: "on_session",
      },
      metadata: {
        userId: userId || null,
      },
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: [
          "US",
          "CA",
          "MX",
          "GB",
          "DE",
          "FR",
          "ES",
          "IT",
          "NL",
          "SE",
          "DK",
          "NO",
          "FI",
          "AT",
          "BE",
          "CH",
          "IE",
          "AU",
          "NZ",
          "SG",
          "HK",
          "JP",
          "KR",
          "AE",
          "SA",
          "IL",
          "BR",
          "IN",
        ],
      },
      success_url: `${process.env.FRONTEND_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/checkout-session/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    if (!sessionId) {
      return res
        .status(400)
        .json({ success: false, error: "Session ID is required" });
    }

    // Firebase first
    const orderQuery = await admin
      .firestore()
      .collection("orders")
      .where("stripeSessionId", "==", sessionId)
      .limit(1)
      .get();

    if (!orderQuery.empty) {
      const orderData = orderQuery.docs[0].data();
      const orderDetails = {
        orderNumber: orderData.shopifyOrderNumber,
        items: orderData.items,
        total: orderData.total,
        shippingAddress: orderData.shippingAddress,
        email: orderData.customerEmail,
        status: orderData.status,
        orderDate: orderData.createdAt,
      };
      return res.json({ success: true, order: orderDetails });
    }

    // Stripe fallback
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    console.log(
      "Line items for session:",
      JSON.stringify(lineItems.data, null, 2)
    );

    if (!lineItems.data || !Array.isArray(lineItems.data)) {
      throw new Error("No valid line items found in session");
    }

    const orderItems = await Promise.all(
      lineItems.data.map(async (item) => {
        if (!item.price || !item.price.product) {
          console.error(
            "Invalid line item structure:",
            JSON.stringify(item, null, 2)
          );
          throw new Error("Line item missing price or product");
        }

        const product = await stripe.products.retrieve(item.price.product);
        console.log("Fetched product:", JSON.stringify(product, null, 2));

        return {
          id: product.metadata.id || "unknown",
          variantId: product.metadata.variantId || "unknown",
          title: product.metadata.title || item.description || "Untitled",
          description: product.metadata.description || "",
          image: product.metadata.image || "",
          price:
            parseFloat(product.metadata.price) ||
            item.amount_total / item.quantity / 100,
          quantity: parseInt(product.metadata.quantity) || item.quantity,
        };
      })
    );

    const orderDetails = {
      id: session.id,
      orderNumber: session.metadata.shopify_order_number,
      items: orderItems,
      total: (session.amount_total / 100).toFixed(2),
      shippingAddress: session.shipping_details.address, // Match Firebase naming
      email: session.customer_details?.email,
      status: session.payment_status,
      orderDate: new Date(session.created * 1000).toISOString(),
    };

    res.json({ success: true, order: orderDetails });
  } catch (error) {
    console.error("Error retrieving checkout session:", error);
    res.status(500).json({
      success: false,
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Error retrieving order details",
    });
  }
});

async function createShopifyOrder(session, orderItems) {
  try {
    const { shipping_details, customer_details } = session;

    console.log("Creating Shopify order with data:", {
      orderItems,
      shipping_details,
      customer_details,
    });

    const shippingAddress = {
      first_name: shipping_details.name.split(" ")[0],
      last_name: shipping_details.name.split(" ").slice(1).join(" "),
      address1: shipping_details.address.line1,
      address2: shipping_details.address.line2 || "",
      city: shipping_details.address.city || "",
      province: shipping_details.address.state || "",
      zip: shipping_details.address.postal_code || "",
      country_code: shipping_details.address.country || "",
      phone: shipping_details.phone || "",
    };

    const lineItems = orderItems.map((item) => ({
      variant_id: item.variantId,
      quantity: item.quantity,
    }));

    const orderData = {
      email: customer_details.email,
      send_receipt: true,
      send_fulfillment_receipt: true,
      line_items: lineItems,
      shipping_address: shippingAddress,
      financial_status: "paid",
      inventory_behaviour: "decrement_ignoring_policy",
      note: `Stripe Session ID: ${session.id}`,
      tags: ["Stripe"],
      total_price: (session.amount_total / 100).toString(),
      currency: session.currency.toUpperCase(),
      payment_gateway_names: ["stripe"],
      transactions: [
        {
          kind: "sale",
          status: "success",
          amount: (session.amount_total / 100).toString(),
          gateway: "stripe",
          payment_details: `Stripe Payment (Session: ${session.id})`,
        },
      ],
    };

    console.log("Sending order to Shopify:", orderData);

    const order = await shopify.order.create(orderData);
    console.log("Shopify order created successfully:", order);
    return order;
  } catch (error) {
    console.error(
      "Error creating Shopify order:",
      error.response?.body || error
    );
    throw error;
  }
}

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, error: "An unexpected error occurred." });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
