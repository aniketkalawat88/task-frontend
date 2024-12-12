export default function Cart({ cart, calculateTotal }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Cart Items</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.name}</span>
            <span>{item.price} x {item.quantity}</span>
          </div>
        ))}
  
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>
    );
  }
  