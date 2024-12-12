"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import OrderList from "../_components/OrderList";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
}