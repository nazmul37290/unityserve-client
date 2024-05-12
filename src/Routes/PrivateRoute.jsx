import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { child } from "firebase/database";
import { Navigate } from "react-router-dom";
import NavbarBg from "../components/NavbarBg";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <NavbarBg></NavbarBg>

        <div className="text-center">
          <span className="loading text-center loading-infinity loading-lg"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
