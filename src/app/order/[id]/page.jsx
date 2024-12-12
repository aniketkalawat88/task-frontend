"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "@/app/_components/OrderDetails";
import { useRouter } from "next/navigation";

export default function SingleOrder() {
  const router = useRouter();
  const { id } = router.query || {}; // Destructure only if router.query is available
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      if (id) {
        try {
          const response = await axios.get(`https://localhost:5000/api/orders/${id}`);
          console.log(response,"2345678")
          setOrder(response.data);
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      }
    }
    fetchOrder();
  }, [id]);

//   if (!order) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h1>
      {/* <OrderDetails order={order} /> */}
    </div>
  );
}
