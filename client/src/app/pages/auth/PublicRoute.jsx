import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }
  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
