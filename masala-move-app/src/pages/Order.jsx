import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Order = () => {

  const address = useSelector((state) => state.address);
  console.log('address', address);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full md:w-[60%] flex flex-col mt-8 gap-4 px-12'>

        {/* Header */}
        <h1 className='text-2xl font-semibold text-center'>
          Your Orders
        </h1>

        {/* Address Details */}
        <div className='flex flex-col mt-2 border p-3 rounded-md'>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-xl text-orange-600"/>
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

        {/* Order cards */}


      </div>
    </div>
  )
}

export default Order