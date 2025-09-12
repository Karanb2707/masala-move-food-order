import OrderItemCard from "../components/OrderItemCard";
import { IoBagCheck } from "react-icons/io5";

const OrderDetailsCard = ({orderDetail}) => {
    return (
        <div className="border border-slate-400 p-2 rounded-lg">
            <div className="flex items-center gap-2">
                <IoBagCheck className="text-xl text-orange-600" />
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