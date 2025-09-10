import React from 'react'
import logo from '../assets/images/logo.png'

const OrderItemCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-2 p-2 m-2 border border-orange-900 rounded-lg'>

      <div className='flex gap-2'>
        <img src={logo} alt="food image" className='w-[120px] border border-orange-300 rounded-lg' />
        <div className='flex flex-col p-2 border border-orange-300 rounded-lg text-[14px] font-semibold'>
          <h1>Name</h1>
          <p>Price</p>
          <p>Quantity</p>
          <p>Toatl Price</p>
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