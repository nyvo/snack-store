import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/app/pages/homepage/HomePage";
import ProductPage from "@/app/pages/productpage/ProductPage";
import GlobalStyle from "@/shared/styles/GlobalStyle";
import CategoryPage from "@/app/pages/categorypage/CategoryPage";
import SearchPage from "./app/pages/searchpage/SearchPage";
import { CartProvider } from "@/features/cart/CartProvider";
import { CollectionProvider } from "@/app/context/CollectionProvider";
import { SearchProvider } from "@/app/context/SearchContext";
import SignInPage from "@/app/pages/auth/sign-in/SignInPage";
import SignUpPage from "@/app/pages/auth/sign-up/SignUpPage";
import { AuthProvider } from "@/app/context/AuthProvider";
import AccountHome from "@/app/pages/account/AccountHome";
import ForgotPasswordContainer from "@/app/pages/auth/reset-password/ForgotPasswordContainer";
import ResetPasswordContainer from "@/app/pages/auth/reset-password/ResetPasswordContainer";
import OrderConfirmPage from "@/features/orderconfirmation/OrderConfirmPage";
import ProtectedRoute from "@/app/pages/auth/ProtectedRoute";
import PublicRoute from "@/app/pages/auth/PublicRoute";
import { Layout } from "@/shared/components/Layout";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <CollectionProvider>
            <GlobalStyle />
            <Router>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:productId" element={<ProductPage />} />
                  <Route path="/search/:query?" element={<SearchPage />} />
                  <Route path="/:collectionType" element={<CategoryPage />} />
                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <AccountHome />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/order/success" element={<OrderConfirmPage />} />
                  {/* Only signin and signup moved here */}
                  <Route
                    path="/signin"
                    element={
                      <PublicRoute>
                        <SignInPage />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <PublicRoute>
                        <SignUpPage />
                      </PublicRoute>
                    }
                  />
                </Route>
                {/* Kept outside Layout */}
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordContainer />}
                />
                <Route
                  path="/reset-password"
                  element={<ResetPasswordContainer />}
                />
              </Routes>
            </Router>
          </CollectionProvider>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
