export const firebaseErrorMappings = {
  // Authentication Errors
  "auth/email-already-in-use":
    "This email is already in use. Please try another one or log in.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Password must be at least 6 characters long.",
  "auth/user-not-found": "No account found with this email. Please sign up.",
  "auth/wrong-password":
    "Incorrect password. Please try again or reset your password.",

  // Access and Permissions
  "auth/insufficient-permission":
    "You don't have permission to perform this action.",
  "auth/operation-not-allowed":
    "This login method is not enabled. Please use another method.",
  "auth/unauthorized-continue-uri":
    "This redirect URL is not allowed. Please contact support.",

  // Token Related
  "auth/id-token-expired": "Your session has expired. Please sign in again.",
  "auth/id-token-revoked":
    "Your session has been revoked. Please sign in again.",
  "auth/invalid-id-token": "Your session is invalid. Please sign in again.",

  // Rate Limiting
  "auth/too-many-requests": "Too many attempts. Please try again later.",

  // Phone Related
  "auth/invalid-phone-number": "Please enter a valid phone number.",
  "auth/phone-number-already-exists":
    "This phone number is already registered.",

  // User Management
  "auth/user-disabled":
    "This account has been disabled. Please contact support.",
  "auth/invalid-password": "Password must be at least 6 characters long.",

  // Project Configuration
  "auth/project-not-found":
    "Service is temporarily unavailable. Please try again later.",
  "auth/internal-error": "An internal error occurred. Please try again later.",

  // Session Related
  "auth/session-cookie-expired":
    "Your session has expired. Please sign in again.",
  "auth/session-cookie-revoked":
    "Your session has been revoked. Please sign in again.",

  // Claims and Custom Tokens
  "auth/claims-too-large": "Profile data exceeds the allowed size.",
  "auth/reserved-claims": "Invalid profile data provided.",

  // Import/Export
  "auth/invalid-user-import": "Unable to import user data.",
  "auth/maximum-user-count-exceeded": "Maximum user limit reached.",

  // Generic Errors
  "auth/invalid-argument": "Invalid information provided.",
  "auth/invalid-credential": "Authentication failed. Please try again.",
};

export default function handleFirebaseError(error) {
  const customError = new Error(
    firebaseErrorMappings[error.code] ||
      "An unexpected error occurred. Please try again later."
  );
  customError.code = error.code;
  customError.originalError = error;
  return customError;
}
