import OrderItemCard from "../components/OrderItemCard";
import { IoBagCheck } from "react-icons/io5";

const OrderDetailsCard = ({ orderDetail }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-4 m-2 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
                <IoBagCheck className="text-2xl text-orange-600" />
                <h1 className="text-lg font-bold text-gray-800">Order Details</h1>
            </div>

            {/* Meta Info (optional) */}
            <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-4">
                <p>
                    <span className="font-semibold text-gray-800">Order ID:</span>{" "}
                    {orderDetail.id}
                </p>
                <p>
                    <span className="font-semibold text-gray-800">Date:</span>{" "}
                    {orderDetail.date}
                </p>
                <p>
                    <span className="font-semibold text-gray-800">Total Items:</span>{" "}
                    {orderDetail.orders.length}
                </p>
            </div>

            {/* Orders List */}
            <div className="flex flex-col gap-4">
                {orderDetail.orders.map((order) => (
                    <OrderItemCard order={order} key={order.id} />
                ))}
            </div>
        </div>
    );
};

export default OrderDetailsCard;
