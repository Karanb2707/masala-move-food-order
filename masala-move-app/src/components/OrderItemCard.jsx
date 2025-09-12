
const OrderItemCard = ({ order }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-2 p-2 m-2 border border-slate-400 rounded-lg'>

      <div className='flex gap-2'>
        <img src={order.imgUrl} alt="food image" className='w-[120px] h-[110px] border border-orange-300 rounded-lg' />
        <div className='flex flex-col px-2 py-1 gap-1 rounded-lg text-[14px] font-semibold'>
          <h1>{`${order.name.substring(0,25)}...`}</h1>
          <p>Price - {order.shownPrice}</p>
          <p>Quantity - {order.quantity}</p>
          <p>Toatl Price - </p>
        </div>
      </div>

      <div className='flex flex-col gap-2 items-center border justify-between border-orange-300 p-2 rounded-lg'>
        <p className='font-semibold'>
          Status - <span className='text-green-600'>In Progress</span>
        </p>
        <button className='py-2 w-full bg-red-600 text-white font-semibold ring ring-red-800 rounded-lg cursor-pointer'>
          Cancel Order
        </button>
      </div>

    </div>
  )
}

export default OrderItemCard