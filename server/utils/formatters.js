// Format a single variant
const formatVariant = (variantEdge) => ({
  id: variantEdge.node.id.split("/").pop(), // Numeric ID for client
  globalId: variantEdge.node.id, // Full GID for Shopify operations
  price: Number(variantEdge.node.priceV2.amount).toFixed(2),
  availableForSale: variantEdge.node.availableForSale,
  quantityAvailable: variantEdge.node.quantityAvailable,
});

// Format a single product
const formatProduct = (product) => ({
  id: product.id.split("/").pop(), // Numeric ID for client
  globalId: product.id, // Full GID for Shopify operations
  title: product.title,
  description: product.description,
  vendor: product.vendor,
  image: product.images.edges[0]?.node.url || null,
  variants: product.variants.edges.map(formatVariant),
});

// Format a collection
const formatCollection = (collection) => ({
  id: collection.id.split("/").pop(), // Numeric ID for client
  globalId: collection.id, // Full GID for Shopify operations
  title: collection.title,
  handle: collection.handle,
  description: collection.description,
  products: collection.products.edges.map((edge) => formatProduct(edge.node)),
});

// Format line items from Stripe checkout session
const formatLineItems = (items) =>
  items.map((item) => ({
    id: item.id,
    title: item.description,
    price: item.amount_total / 100,
    quantity: item.quantity,
    image: item.price.product.images[0],
    description: item.price.product.description || "",
  }));

// Format customer details from Stripe checkout session
const formatCustomer = (customerDetails) => ({
  name: customerDetails.name,
  email: customerDetails.email,
  shipping: {
    address: {
      city: customerDetails.address.city,
      country: customerDetails.address.country,
      line1: customerDetails.address.line1,
      line2: customerDetails.address.line2 || "",
      postal_code: customerDetails.address.postal_code,
      state: customerDetails.address.state,
    },
    name: customerDetails.name,
  },
  phone: customerDetails.phone || "",
});

// Format complete order from Stripe checkout session
const formatOrder = (session) => ({
  id: session.id,
  payment_status: session.payment_status,
  payment_method: session.payment_method_types[0],
  amount_total: session.amount_total / 100,
  customer: formatCustomer(session.customer_details),
  items: formatLineItems(session.line_items.data),
  created_at: new Date(session.created * 1000).toISOString(),
  status: session.status,
});

module.exports = {
  formatProduct,
  formatCollection,
  formatOrder,
  formatLineItems,
  formatCustomer,
};
