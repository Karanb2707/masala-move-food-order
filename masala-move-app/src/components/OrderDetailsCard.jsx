import { FaLocationDot } from "react-icons/fa6";
import OrderItemCard from "../components/OrderItemCard";

const OrderDetailsCard = ({orderDetail}) => {
    return (
        <div className="border p-2 rounded-lg">
            <div className="flex items-center gap-2">
                <FaLocationDot className="text-xl text-orange-600" />
                <h1 className='text-[18px] font-semibold'>
                    Order Details
                </h1>
            </div>

            <div className="flex flex-col">
                {
                    orderDetail.orders.map(order => (
                        <OrderItemCard order={order} key={order.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default OrderDetailsCard