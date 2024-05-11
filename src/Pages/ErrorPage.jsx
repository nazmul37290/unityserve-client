import Lottie from "lottie-react";
import errorgif from "../assets/Animation - 1715414711000.json";
const ErrorPage = () => {
  return (
    <div className="max-h-screen">
      <Lottie animationData={errorgif} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
