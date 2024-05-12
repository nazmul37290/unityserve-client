import Lottie from "lottie-react";
import errorgif from "../assets/Animation - 1715414711000.json";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <div className="max-h-screen">
      <Helmet>
        <title>UNITYSERVE | Not found</title>
      </Helmet>
      <Lottie animationData={errorgif} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
