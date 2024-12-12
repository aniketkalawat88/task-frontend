export default function OrderDetails({ order }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Order #{order.id}</h2>
        <div className="mt-2">
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Total:</strong> ${order.total}</p>
        </div>
  
        <h3 className="mt-4 text-md font-bold text-gray-600">Items</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index} className="border-b py-2">
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }