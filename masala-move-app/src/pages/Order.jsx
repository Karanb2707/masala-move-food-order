import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import OrderDetailsCard from "../components/OrderDetailsCard";

const Order = () => {

  const address = useSelector((state) => state.address);
  console.log('address', address);

  const orderDetails = useSelector((state) => state.order.orderData);
  console.log('order data', orderDetails);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full lg:w-[65%] flex flex-col mt-8 gap-4 px-6'>

        {/* Header */}
        <h1 className='text-2xl font-semibold text-center'>
          Your Orders
        </h1>

        {
          orderDetails.length > 0
            ?
            <div className='flex flex-col mt-2 border border-slate-400 p-3 gap-2 rounded-md my-6'>

              <div>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-xl text-orange-600" />
                  <h1 className='text-[18px] font-semibold'>
                    Address Details
                  </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2 text-[14px] font-semibold'>
                  <p>Street - {address.street}</p>
                  <p>Apartment - {address.apartment}</p>
                  <p>House No - {address.houseno}</p>
                  <p>Zip Code - {address.zipcode}</p>
                  <p>City - {address.city}</p>
                  <p>State - {address.state}</p>
                </div>
              </div>

              {
                orderDetails.map(orderDetail => (
                  <OrderDetailsCard orderDetail={orderDetail} key={orderDetail.id} />
                ))
              }

            </div>
            :
            <div className="text-center mt-10 text-xl font-semibold">
              <h1>
                No Orders Placed Yet!!
              </h1>
            </div>
        }

      </div>
    </div>
  )
}

export default Order