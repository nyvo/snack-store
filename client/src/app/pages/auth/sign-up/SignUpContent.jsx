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
  AuthInputField,
  AuthButton,
  StyledLink,
  ErrorFrame,
  ErrorText,
  ErrorIcon,
} from "@/shared/styles/AuthStyles";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/shared/components/Spinner";
import { validateEmail } from "@/app/pages/auth/emailErrors";

const SignUpContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, signInWithGoogle, getRedirectResult } =
    useContext(AuthContext);

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

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      // No need to navigate here as it will redirect to Google
    } catch (error) {
      console.log("Error details:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    // Clear previous errors
    setError("");
    setEmailError("");

    // Validate email
    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await signup(email, password);
      console.log("User signed up successfully!");
      navigate("/account");
    } catch (error) {
      console.log("Error details:", error);
      if (error.code?.includes("auth/email")) {
        setEmailError(error.message);
      } else {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TitleContainer>
        <H5SemiBold>Create your Account</H5SemiBold>
        <SmallRegular color="var(--color-800)">
          Easily track your orders, view order history, and access exclusive
          deals
        </SmallRegular>
      </TitleContainer>

      <AuthContainer>
        <AuthGoogleContainer>
          <AuthGoogleButton
            type="button"
            onClick={handleGoogleSignUp}
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

        <AuthFormContainer onSubmit={handleSignUp}>
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
              {isLoading ? <Spinner /> : "Sign Up"}
            </SmallMedium>
          </AuthButton>
        </AuthFormContainer>
        <SmallRegular color="var(--color-800)">
          Already have an account?{" "}
          <StyledLink
            to="/sign-in"
            style={{ fontWeight: "var(--font-weight-medium)" }}
          >
            Sign in
          </StyledLink>
        </SmallRegular>
      </AuthContainer>
    </>
  );
};

export default SignUpContent;
