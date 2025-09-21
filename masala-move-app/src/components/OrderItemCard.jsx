const OrderItemCard = ({ order }) => {
  const totalPrice = parseFloat(order.shownPrice) * order.quantity;

  return (
    <div className="flex gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      
      {/* Image */}
      <img
        src={order.imgUrl}
        alt={order.name}
        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
      />

      {/* Details */}
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold text-gray-900">
          {order.name.length > 35 ? `${order.name.substring(0, 35)}...` : order.name}
        </h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>₹{order.shownPrice} × {order.quantity}</p>
          <p className="font-semibold text-gray-900">Total: ₹{totalPrice}</p>
        </div>
      </div>

      {/* Status & Action */}
      <div className="text-right space-y-2">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
          Delivered
        </span>
        <button className="block w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">
          Cancel
        </button>
      </div>

    </div>
  );
};

export default OrderItemCard;