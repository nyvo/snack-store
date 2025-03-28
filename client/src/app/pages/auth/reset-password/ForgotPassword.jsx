import { useContext, useState } from "react";
import {
  TitleContainer,
  AuthFormContainer,
  AuthInputField,
  AuthButton,
  ErrorFrame,
  ErrorText,
  ErrorIcon,
} from "@/shared/styles/AuthStyles";
import {
  H5SemiBold,
  SmallMedium,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles";
import { AuthContext } from "@/app/context/AuthContext";
import { Spinner } from "@/shared/components/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await resetPassword(email);
      setError(null);
      setIsSubmitted(true);
    } catch (error) {
      setError(error.message);
      console.error("Error sending code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TitleContainer>
        <H5SemiBold>Forgot your password?</H5SemiBold>
        <SmallRegular color="var(--color-800)">
          Enter your email to send reset link.
        </SmallRegular>
      </TitleContainer>
      <AuthFormContainer onSubmit={handleSendCode}>
        <AuthInputField
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <AuthButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner />
          ) : (
            <SmallMedium color="var(--color-white)">
              {isSubmitted ? "Resend email" : "Send email"}
            </SmallMedium>
          )}
        </AuthButton>
        {error ? (
          <ErrorFrame>
            <ErrorIcon />
            <ErrorText>{error}</ErrorText>
          </ErrorFrame>
        ) : (
          isSubmitted && (
            <SmallRegular>
              Please check your email for the reset link.
            </SmallRegular>
          )
        )}
      </AuthFormContainer>
    </>
  );
};

export default ForgotPassword;
