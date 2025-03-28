import { useState } from "react";
import {
  AccountContent,
  EmailContainer,
  ChangePasswordButton,
  DetailsItem,
} from "@/shared/styles/AccountStyles";
import {
  BodySemiBold,
  LabelMedium,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles";
import ChangePassword from "./ChangePassword";

const DetailsSection = ({ email, onPasswordChangeSuccess }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <AccountContent>
      <BodySemiBold>Account Details</BodySemiBold>
      <DetailsItem>
        <LabelMedium color="var(--color-950)">Email</LabelMedium>
        <EmailContainer>
          <SmallRegular color="var(--color-300)">{email}</SmallRegular>
        </EmailContainer>
      </DetailsItem>
      <ChangePasswordButton
        onClick={() => setShowChangePassword(!showChangePassword)}
      >
        <LabelMedium color="var(--color-950)">Change Password</LabelMedium>
      </ChangePasswordButton>
      {showChangePassword && (
        <ChangePassword
          setShowChangePassword={setShowChangePassword}
          onSuccess={onPasswordChangeSuccess}
        />
      )}
    </AccountContent>
  );
};

export default DetailsSection;
