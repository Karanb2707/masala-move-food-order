import React from 'react'
import CartItemCard from '../components/CartItemCard'

const Cart = () => {

  return (
    <div className='p-4'>
      <h1 className='text-3xl text-center font-semibold mt-2'>
        Your Basket
      </h1>

      <div className='w-[80%] mt-8 ring ring-slate-200 mx-auto p-3 rounded-md'>
        <div className='flex items-start justify-between gap-4 my-4'>

          {/* Left side */}
          <div className='w-full flex flex-col gap-4'>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
          </div>

          {/* Right side */}
          <div className='w-[35%] flex flex-col ring ring-slate-300 shadow-xl gap-4 p-3 rounded-md'>
            <h1 className='text-2xl font-semibold'>
              Summary
            </h1>
            <div className='ring ring-blue-200 p-2 rounded-md flex flex-col gap-1 font-semibold'>
              <p>Sub-total - 100</p>
              <p>Shipping - 20</p>
            </div>
            <h2 className='ring ring-blue-200 p-2 font-semibold rounded-md'>
              Total - 120
            </h2>
            <button className='bg-black text-white p-2 rounded-md cursor-pointer'>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart