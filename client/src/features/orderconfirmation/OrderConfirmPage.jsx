import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext } from "@/app/context/AuthProvider";
import { useCart } from "../cart/useCart";
import { Spinner } from "@/shared/components/Spinner";
import HeaderNoNav from "@/shared/components/HeaderNoNav";
import {
  PageContainer,
  ContentContainerBigGap,
  SpinnerContainer,
} from "@/shared/styles/LayoutStyles";
import { OrderTitle } from "./OrderTitle";
import { OrderSummarySection } from "./OrderSummarySection";
import { ActionSection } from "./ActionSection";
import { SocialSection } from "./SocialSection";
import { SupportSection } from "./SupportSection";

const OrderConfirmPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);
  const { clearCart } = useCart();
  const sessionId = searchParams.get("session_id");
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    console.log("Session ID from URL:", sessionId);
    const fetchOrderDetails = async () => {
      if (hasFetched) return;
      setHasFetched(true);

      if (!sessionId) {
        setError("No session ID found");
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      try {
        console.log("Fetching order for sessionId:", sessionId);
        clearCart();
        const response = await fetch(
          `http://localhost:3001/checkout-session/${sessionId}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        console.log("Full backend response:", JSON.stringify(data, null, 2));
        console.log("Backend response:", data);
        if (data.success && data.order) {
          setOrderDetails(data.order);
        } else {
          setError("Order not found");
          setTimeout(() => navigate("/"), 2000);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load order details");
        setTimeout(() => navigate("/"), 2000);
      } finally {
        setLoading(false);
      }
    };

    console.log("useEffect triggered with sessionId:", sessionId);
    fetchOrderDetails();
  }, [sessionId, navigate, clearCart]);

  if (loading) {
    return (
      <PageContainer>
        <HeaderNoNav />
        <SpinnerContainer>
          <Spinner color="black" />
        </SpinnerContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <HeaderNoNav />
        <ContentContainerBigGap>
          <p>{error}, redirecting...</p>
        </ContentContainerBigGap>
      </PageContainer>
    );
  }

  if (!orderDetails) {
    return null;
  }

  return (
    <PageContainer>
      <HeaderNoNav />
      <ContentContainerBigGap>
        <OrderTitle user={user} />
        <OrderSummarySection orderDetails={orderDetails} />
        <ActionSection isAuthenticated={isAuthenticated} navigate={navigate} />
        <SocialSection />
        <SupportSection />
      </ContentContainerBigGap>
    </PageContainer>
  );
};

export default OrderConfirmPage;
