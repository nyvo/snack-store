// First, create this new file for email-specific errors
export const emailErrorMappings = {
  "auth/email-already-in-use":
    "This email is already in use. Please try another one or log in.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "No account found with this email. Please sign up.",
};

export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
};
