import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import OrderDetailsCard from "../components/OrderDetailsCard";

const Order = () => {
  const address = useSelector((state) => state.address);
  const orderDetails = useSelector((state) => state.order.orderData);

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-6 px-4 md:px-6">

        {/* Page Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Your Orders
        </h1>

        {orderDetails.length > 0 ? (
          <div className="flex flex-col gap-6">

            {/* Address Card */}
            <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <FaLocationDot className="text-2xl text-orange-600" />
                <h1 className="text-xl font-semibold text-gray-800">Address Details</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 font-medium text-sm">
                <p><span className="font-semibold text-gray-800">Street:</span> {address.street}</p>
                <p><span className="font-semibold text-gray-800">Apartment:</span> {address.apartment}</p>
                <p><span className="font-semibold text-gray-800">House No:</span> {address.houseno}</p>
                <p><span className="font-semibold text-gray-800">Zip Code:</span> {address.zipcode}</p>
                <p><span className="font-semibold text-gray-800">City:</span> {address.city}</p>
                <p><span className="font-semibold text-gray-800">State:</span> {address.state}</p>
              </div>
            </div>

            {/* Orders List */}
            <div className="flex flex-col gap-4">
              {orderDetails.map(orderDetail => (
                <OrderDetailsCard orderDetail={orderDetail} key={orderDetail.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-20 text-xl md:text-2xl font-semibold text-gray-500">
            No Orders Placed Yet!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
