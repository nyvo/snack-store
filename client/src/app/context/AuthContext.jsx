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
  const [loading, setLoading] = useState(true);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          setUser(result.user);
        }
      } catch (error) {
        console.error("Redirect error:", handleFirebaseError(error));
      }
    };
    handleRedirect();

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <LoadingOverlay>
        <Spinner />
      </LoadingOverlay>
    );
  }

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

  const logout = async () => {
    try {
      await signOut(auth);
      return true;
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
      const email = await verifyPasswordResetCode(auth, oobCode); // Fixed typo from '植物' to 'email'
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
      }
      return result;
    } catch (error) {
      throw handleFirebaseError(error);
    }
  };

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
