import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "@/app/context/AuthContext";
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
import { Spinner } from "@/shared/components/Spinner";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { confirmResetPassword, verifyResetCode, resetPassword } =
    useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Get oobCode from URL parameters
  const queryParams = new URLSearchParams(window.location.search);
  const oobCode = queryParams.get("oobCode");

  // Verify the oobCode on mount
  useEffect(() => {
    if (!oobCode) return; // Skip if no oobCode
    const checkCode = async () => {
      try {
        await verifyResetCode(oobCode);
      } catch (err) {
        setError(err.message || "The reset link may be invalid or expired.");
      }
    };
    checkCode();
  }, [oobCode, verifyResetCode]);

  // Redirect after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/sign-in"); // Redirect to sign-in after 3 seconds
      }, 3000); // 3000ms = 3 seconds
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [success, navigate]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await confirmResetPassword(oobCode, newPassword);
      setSuccess(true);
      setError("");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Early return if no oobCode
  if (!oobCode) {
    return (
      <>
        <TitleContainer>
          <H5SemiBold>Forgot your password?</H5SemiBold>
          <SmallRegular color="var(--color-800)">
            Enter your email to send a reset link.
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
  }

  return (
    <>
      <TitleContainer>
        {success ? (
          <>
            <H5SemiBold>Password Reset Successful</H5SemiBold>
            <SmallRegular color="var(--color-800)">
              Redirecting to sign-in in 3 seconds...
            </SmallRegular>
          </>
        ) : (
          <>
            <H5SemiBold>Reset Password</H5SemiBold>
            <SmallRegular color="var(--color-800)">
              Enter a new password and confirm it. Make sure your password is
              strong and secure.
            </SmallRegular>
          </>
        )}
      </TitleContainer>
      {!success && (
        <AuthFormContainer onSubmit={handleSubmit}>
          <AuthInputField
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
          <AuthInputField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
          <AuthButton type="submit" disabled={isLoading}>
            <SmallMedium color="var(--color-white)">
              {isLoading ? <Spinner /> : "Reset Password"}
            </SmallMedium>
          </AuthButton>
          {error && (
            <ErrorFrame>
              <ErrorIcon />
              <ErrorText>{error}</ErrorText>
            </ErrorFrame>
          )}
        </AuthFormContainer>
      )}
    </>
  );
}

export default ResetPassword;
