import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import {
  PageContainer,
  ContentContainerBigGap,
} from "@/shared/styles/LayoutStyles";
import Footer from "@/shared/components/Footer";
import { SmallMedium } from "@/shared/styles/CombinedFontStyles";
import { AuthButton } from "@/shared/styles/AuthStyles";
import { AccountDetails } from "@/shared/styles/AccountStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/shared/components/Header";
import OrdersSection from "./OrdersSection";
import DetailsSection from "./DetailsSection";
import { TitleContainer } from "@/shared/styles/AccountStyles";
import { H5Bold } from "@/shared/styles/CombinedFontStyles";
import { db } from "@/app/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

const AccountHome = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [isOrderLoading, setIsOrderLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.uid) {
      const fetchOrders = async () => {
        try {
          setIsOrderLoading(true);
          const ordersQuery = query(
            collection(db, "orders"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(ordersQuery);
          const ordersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(ordersData);
        } catch (error) {
          setError("Error fetching orders:", error);
          console.error("Error fetching orders:", error);
          toast.error("Error fetching orders. Please try again later.");
        } finally {
          setIsOrderLoading(false);
        }
      };
      fetchOrders();
    }
  }, [user?.uid]);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handlePasswordChangeSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <PageContainer>
      <Header />
      <ContentContainerBigGap>
        <TitleContainer>
          <H5Bold>My Account</H5Bold>
        </TitleContainer>

        <AccountDetails>
          <DetailsSection
            email={user.email}
            onPasswordChangeSuccess={handlePasswordChangeSuccess}
            error={error}
          />
          <OrdersSection orders={orders} isOrdersLoading={isOrderLoading} />
          <AuthButton aria-label="Logout" onClick={handleLogout}>
            <SmallMedium color="var(--color-white)">Logout</SmallMedium>
          </AuthButton>
        </AccountDetails>
      </ContentContainerBigGap>
      <Footer />
      <ToastContainer />
    </PageContainer>
  );
};

export default AccountHome;
