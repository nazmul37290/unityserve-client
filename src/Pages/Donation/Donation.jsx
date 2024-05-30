import { Helmet } from "react-helmet-async";
import NavbarBg from "../../components/NavbarBg";
import banner from "../../assets/banner.jpg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENTKEY);
const Donation = () => {
  return (
    <div>
      <Helmet>
        <title>UNITYSERVE | Manage my posts</title>
      </Helmet>
      <div>
        <NavbarBg
          img={banner}
          sectionTitle={"__________make donation_________"}
          title={`Your small contribution can bring smile to some faces`}
        ></NavbarBg>
      </div>
      <h1 className="text-xl lg:text-3xl font-bold text-center mt-5  max-w-fit mx-auto pb-2 border-b-light border-b-2">
        Donate Now
      </h1>
      <div className="mt-24 ">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Donation;
