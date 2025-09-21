const OrderItemCard = ({ order }) => {
  const totalPrice = parseFloat(order.shownPrice) * order.quantity;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 m-2 bg-white border border-slate-200 shadow-md rounded-2xl hover:shadow-lg transition-shadow">

      {/* Left: Image + Details */}
      <div className="flex gap-4 w-full md:w-2/3">
        <img
          src={order.imgUrl}
          alt="food"
          className="w-[120px] h-[110px] object-cover border border-orange-300 rounded-xl shadow-sm"
        />
        <div className="flex flex-col justify-between text-sm font-medium w-full">
          <h1 className="text-base font-semibold text-gray-800">
            {order.name.length > 30
              ? `${order.name.substring(0, 30)}...`
              : order.name}
          </h1>
          <p className="text-gray-600">Price: <span className="font-semibold text-black">₹{parseFloat(order.shownPrice)}</span></p>
          <p className="text-gray-600">Quantity: <span className="font-semibold text-black">{order.quantity}</span></p>
          <p className="text-gray-600">Total: <span className="font-semibold text-orange-600">₹{totalPrice}</span></p>
        </div>
      </div>

      {/* Right: Status + Action */}
      <div className="flex flex-col gap-3 items-center w-full md:w-1/3 border border-orange-200 bg-orange-50 p-3 rounded-xl shadow-sm">
        <p className="font-medium text-gray-700">
          Status: <span className="text-green-600 font-semibold">In Progress</span>
        </p>
        <button className="py-2 px-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderItemCard;
