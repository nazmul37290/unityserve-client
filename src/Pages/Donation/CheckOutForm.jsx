import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import toast from "react-hot-toast";

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(1);
  const [clientSecret, setClientSecret] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_URL}/create-payment-intent`, {
        amount: amount,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [amount]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error, "error");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError, "confirm Error");
    } else {
      console.log(paymentIntent, "payment intent");
      toast.success("success fully paid");
      setTransactionId(paymentIntent.id);
    }
  };
  const handlePay = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const amount = e.target.amount.value;
    setAmount(amount);
    if (amount > 0) {
      setShowPayment(true);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <form onSubmit={handlePay}>
          <div className="flex gap-5 ">
            <input
              className="p-2 border w-full mb-4 "
              type="text"
              placeholder="enter your name"
              name="name"
              id=""
            />
            <input
              className="p-2 border w-full  mb-4"
              type="number"
              placeholder="enter donation amount"
              name="amount"
              id=""
            />
            <br />
          </div>
          <input
            className="btn mb-5 bg-light"
            type="submit"
            value="Proceed to pay"
          />
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-5 btn bg-light"
          type="submit"
          disabled={!stripe || !clientSecret || !showPayment}
        >
          Donate
        </button>
      </form>
      {transactionId && (
        <p className="text-[#0db82a] mt-2">
          <span className="font-bold uppercase mr-4">your transaction id:</span>{" "}
          {transactionId && transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
