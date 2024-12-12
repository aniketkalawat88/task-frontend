"use client"


import { useState } from "react";
import axios from "axios";

export default function CheckoutForm({ cart }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment/checkout-session", {
        email,
        cartItems: cart,
      });
      console.log(response,"fghjk,.")
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Payment failed: " + error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Checkout</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded-md mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Proceed to Checkout
      </button>

      {message && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}
