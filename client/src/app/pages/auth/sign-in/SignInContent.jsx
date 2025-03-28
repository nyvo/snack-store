import {
  H5SemiBold,
  LabelMedium,
  LabelRegular,
  SmallMedium,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles";
import {
  AuthContainer,
  TitleContainer,
  AuthFormContainer,
  AuthGoogleContainer,
  AuthGoogleButton,
  AuthGoogleIcon,
  Divider,
  AuthInputContainer,
  AuthInput,
  StyledLink,
  AuthInputField,
  AuthButton,
  ErrorFrame,
  ErrorIcon,
  ErrorText,
} from "@/shared/styles/AuthStyles";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/shared/components/Spinner";
import { validateEmail } from "@/app/pages/auth/emailErrors";

const SignInContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, signInWithGoogle, getRedirectResult } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult();
        if (result?.user) {
          console.log("User signed in with Google successfully!");
          navigate("/account");
        }
      } catch (error) {
        console.log("Error details:", error);
        setError(error.message);
      }
    };
    handleRedirectResult();
  }, [getRedirectResult, navigate]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("Error details:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    setError("");
    setEmailError("");
    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return false;
    }
    if (!password) {
      setError("Please enter a password");
      return false;
    }
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await login(email, password);
      console.log("User signed in successfully!");
      navigate("/account");
    } catch (error) {
      console.log("Error details:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TitleContainer>
        <H5SemiBold>Sign in</H5SemiBold>
      </TitleContainer>
      <AuthContainer>
        <AuthGoogleContainer>
          <AuthGoogleButton
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <AuthGoogleIcon />
            <SmallMedium style={{ color: "#E3E3E3" }}>
              Sign in with Google
            </SmallMedium>
          </AuthGoogleButton>
          <LabelRegular color="var(--color-800)">
            Quick and secure sign-in with Google.
          </LabelRegular>
        </AuthGoogleContainer>

        <Divider />

        <AuthFormContainer onSubmit={handleSignIn}>
          <AuthInputContainer>
            <AuthInput>
              <LabelMedium color="var(--color-800)">Email Address</LabelMedium>
              <AuthInputField
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <ErrorFrame>
                  <ErrorIcon />
                  <ErrorText>{emailError}</ErrorText>
                </ErrorFrame>
              )}
            </AuthInput>
            <AuthInput>
              <LabelMedium color="var(--color-800)">Password</LabelMedium>
              <AuthInputField
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <ErrorFrame>
                  <ErrorIcon />
                  <ErrorText>{error}</ErrorText>
                </ErrorFrame>
              )}
            </AuthInput>
          </AuthInputContainer>

          <AuthButton type="submit" disabled={isLoading}>
            <SmallMedium color="var(--color-white)">
              {isLoading ? <Spinner /> : "Sign In"}
            </SmallMedium>
          </AuthButton>

          <StyledLink to="/forgot-password">
            <SmallRegular color="var(--color-800)">
              Forgot your password?
            </SmallRegular>
          </StyledLink>
        </AuthFormContainer>
      </AuthContainer>
    </>
  );
};

export default SignInContent;
