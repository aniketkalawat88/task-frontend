"use client"

import { useState } from "react";
import Cart from "./_components/Cart";
import CheckoutForm from "./_components/CheckoutForm";

export default function Home() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 50, quantity: 1 },
    { id: 2, name: "Product 2", price: 30, quantity: 2 },
  ]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Simple Checkout</h1>

      <Cart cart={cart} calculateTotal={calculateTotal} />
      <CheckoutForm cart={cart} />
    </div>
  );
}