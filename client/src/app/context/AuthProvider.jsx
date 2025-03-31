import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
  EmailAuthProvider,
  updatePassword,
  reauthenticateWithCredential,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import PropTypes from "prop-types";
import handleFirebaseError from "@/app/firebaseErrors";
import { Spinner } from "@/shared/components/Spinner";
import { LoadingOverlay } from "@/shared/styles/OverlayStyles";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Only true until initial auth check
  const isAuthenticated = user !== null;

  useEffect(() => {
    // Check for cached user in sessionStorage
    const cachedUser = sessionStorage.getItem("authUser");
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
      setLoading(false); // Skip spinner if we have a cached user
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        sessionStorage.setItem("authUser", JSON.stringify(firebaseUser)); // Cache user in sessionStorage
      } else {
        setUser(null);
        sessionStorage.removeItem("authUser"); // Clear cache if no user
      }
      setLoading(false); // Done checking auth state
    });

    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          setUser(result.user);
          sessionStorage.setItem("authUser", JSON.stringify(result.user)); // Cache redirect user
        }
      } catch (error) {
        console.error("Redirect error:", handleFirebaseError(error));
      }
    };
    handleRedirect();

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state
      sessionStorage.removeItem("authUser"); // Remove cached user on logout
      return true;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const verifyResetCode = async (oobCode) => {
    try {
      const email = await verifyPasswordResetCode(auth, oobCode);
      return email;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const confirmResetPassword = async (oobCode, newPassword) => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      return true;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      return true;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  const handleRedirectResult = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result?.user) {
        setUser(result.user);
        sessionStorage.setItem("authUser", JSON.stringify(result.user));
      }
      return result;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

  if (loading) {
    return (
      <LoadingOverlay>
        <Spinner />
      </LoadingOverlay>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        signup,
        signInWithGoogle,
        resetPassword,
        verifyResetCode,
        confirmResetPassword,
        changePassword,
        getRedirectResult: handleRedirectResult,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
