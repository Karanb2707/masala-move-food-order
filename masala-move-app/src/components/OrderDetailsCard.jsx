import React, { useState } from 'react';
import OrderItemCard from "../components/OrderItemCard";
import { IoBagCheck } from "react-icons/io5";
import { ChevronDown, ChevronUp } from 'lucide-react';

const OrderDetailsCard = ({ orderDetail }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* Header - Clickable */}
            <div 
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <IoBagCheck className="text-xl text-orange-600" />
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Order #{orderDetail.id.toString().slice(-6)}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {orderDetail.orders.length} items • {orderDetail.date ? formatDate(orderDetail.date) : formatDate(orderDetail.id)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="font-bold text-gray-900">₹{orderDetail.total}</p>
                            <p className="text-sm text-green-600">Delivered</p>
                        </div>
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                </div>
            </div>

            {/* Accordion Content */}
            {isExpanded && (
                <div className="border-t border-gray-200">
                    {/* Order Items */}
                    <div className="p-4 space-y-3">
                        {orderDetail.orders.map((order) => (
                            <OrderItemCard order={order} key={order.id} />
                        ))}
                    </div>

                    {/* Order Total */}
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                            <span>Total Amount</span>
                            <span>₹{orderDetail.total}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderDetailsCard;