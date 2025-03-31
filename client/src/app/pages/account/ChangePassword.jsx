import { useState, useContext } from "react";
import {
  ChangePasswordContainer,
  ChangePasswordInput,
  ForgotPasswordLink,
  ChangePasswordForm,
} from "@/shared/styles/AccountStyles";
import {
  LabelMedium,
  LabelRegular,
  SmallMedium,
} from "@/shared/styles/CombinedFontStyles";
import { AuthContext } from "@/app/context/AuthProvider";
import { AuthButton } from "@/shared/styles/AuthStyles";
import PropTypes from "prop-types";

const ChangePassword = ({ setShowChangePassword, onSuccess }) => {
  const { changePassword, user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (user?.providerData?.[0]?.providerId === "google.com") {
    return (
      <ChangePasswordContainer>
        <LabelRegular color="var(--color-950)">
          Your account is linked to Google. Please use Google&apos;s account
          settings to manage your password.
        </LabelRegular>
      </ChangePasswordContainer>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords don't match");
      return;
    }

    // Ensure new password is different from current password
    if (currentPassword === newPassword) {
      setError("New password must be different from current password");
      return;
    }

    try {
      await changePassword(currentPassword, newPassword);
      setShowChangePassword(false);
      onSuccess?.("Password changed successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ChangePasswordForm onSubmit={handleSubmit}>
      <ChangePasswordContainer>
        <LabelMedium color="var(--color-950)">Current Password</LabelMedium>
        <ChangePasswordInput
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current password"
        />
      </ChangePasswordContainer>

      <ChangePasswordContainer>
        <LabelMedium color="var(--color-950)">New Password</LabelMedium>
        <ChangePasswordInput
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />

        <ChangePasswordInput
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
        />

        {error && <SmallMedium>{error}</SmallMedium>}
      </ChangePasswordContainer>

      <AuthButton type="submit">
        <SmallMedium color="var(--color-white)">Change Password</SmallMedium>
      </AuthButton>

      <ForgotPasswordLink to="/forgot-password">
        <LabelMedium color="var(--color-600)">
          Forgot your password?
        </LabelMedium>
      </ForgotPasswordLink>
    </ChangePasswordForm>
  );
};

export default ChangePassword;

ChangePassword.propTypes = {
  setShowChangePassword: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
