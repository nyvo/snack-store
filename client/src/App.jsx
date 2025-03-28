import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
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
import { AuthProvider } from "@/app/context/AuthContext";
import AccountHome from "@/app/pages/account/AccountHome";
import ForgotPasswordContainer from "@/app/pages/auth/reset-password/ForgotPasswordContainer";
import ResetPasswordContainer from "@/app/pages/auth/reset-password/ResetPasswordContainer";
import OrderConfirmPage from "@/features/orderconfirmation/OrderConfirmPage";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <CollectionProvider>
              <GlobalStyle />
              <AppContainer>
                <Router>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/product/:productId"
                      element={<ProductPage />}
                    />
                    <Route path="/search/:query?" element={<SearchPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/:collectionType" element={<CategoryPage />} />
                    <Route path="/account" element={<AccountHome />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPasswordContainer />}
                    />
                    <Route
                      path="/reset-password"
                      element={<ResetPasswordContainer />}
                    />
                    <Route
                      path="/order/success"
                      element={<OrderConfirmPage />}
                    />
                  </Routes>
                </Router>
              </AppContainer>
            </CollectionProvider>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;

/* ----------STYLES---------- */

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 390px;
`;
