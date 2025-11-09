import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import OrderDetailsCard from "../components/OrderDetailsCard";
import { ShoppingBag, Package } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Order = () => {
  const address = useSelector((state) => state.address);
  const orderDetails = useSelector((state) => state.order.orderData);

  const navigate = useNavigate();
  const handleStartShopping = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2 mt-2">
            <ShoppingBag className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Your Orders
            </h1>
          </div>
          {orderDetails.length > 0 && (
            <p className="text-gray-600">
              {orderDetails.length} {orderDetails.length === 1 ? 'order' : 'orders'} found
            </p>
          )}
        </div>

        {orderDetails.length > 0 ? (
          <div className="space-y-6">

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <FaLocationDot className="text-white text-lg" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Latest Delivery Address
                    </h2>
                    <p className="text-sm text-gray-600">
                      Your orders will be delivered here
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Street</p>
                    <p className="text-sm font-medium text-gray-900">{address.street}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Apartment</p>
                    <p className="text-sm font-medium text-gray-900">{address.apartment}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">House No</p>
                    <p className="text-sm font-medium text-gray-900">{address.houseno}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">PIN Code</p>
                    <p className="text-sm font-medium text-gray-900">{address.zipcode}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">City</p>
                    <p className="text-sm font-medium text-gray-900">{address.city}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">State</p>
                    <p className="text-sm font-medium text-gray-900">{address.state}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Order History
                  </h2>
                  <span className="ml-2 px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    {orderDetails.length}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {orderDetails.map(orderDetail => (
                  <div key={orderDetail.id} className="p-6">
                    <OrderDetailsCard orderDetail={orderDetail} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-6">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                  <Package className="w-12 h-12 text-gray-400" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  No orders yet
                </h2>

                <p className="text-gray-600 text-lg">
                  When you place your first order, it will appear here.
                </p>

                <div className="pt-6">
                  <button
                    onClick={handleStartShopping}
                    className='bg-orange-600 text-white px-4 py-2 rounded-md font-semibold cursor-pointer'
                  >
                    Start Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;