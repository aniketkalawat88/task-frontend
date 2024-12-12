import Link from "next/link";

export default function OrderList({ orders }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Orders</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Order ID</th>
            <th className="border-b px-4 py-2 text-left">Amount</th>
            <th className="border-b px-4 py-2 text-left">Email</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
            <th className="border-b px-4 py-2 text-left">Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border-b px-4 py-2">
                <Link href={`/order/${order._id}`} className="text-blue-500 hover:underline">
                  {order._id}
                </Link>
              </td>
              <td className="border-b px-4 py-2 text-blue-500">{order.amount}</td>
              <td className="border-b px-4 py-2 text-blue-500">{order.email}</td>
              <td className="border-b px-4 py-2 text-blue-500">{order.status}</td>
              <td className="border-b px-4 py-2">
                {order.items.map((item, i) => (
                  <div key={i}>
                    <p className="text-blue-500">Name: {item.name}</p>
                    <p className="text-blue-500">Price: {item.price}</p>
                    <p className="text-blue-500">Quantity: {item.quantity}</p>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
