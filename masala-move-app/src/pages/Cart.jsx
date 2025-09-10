import React from 'react'
import CartItemCard from '../components/CartItemCard'
import { useSelector } from 'react-redux'
import emptyCart from '../assets/images/empty_cart.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);
  console.log('cartItems', cartItems);

  const navigate = useNavigate();

  // Calculation part
  const subTotal = cartItems.reduce((sum, item) => sum + parseFloat(item.shownPrice) * item.quantity, 0);
  const gst = (subTotal * 0.18).toFixed(2);
  const total = (subTotal + parseFloat(gst)).toFixed(2);

  return (
    <div className='p-4'>
      <h1 className='text-3xl text-center font-semibold mt-2'>
        Your Basket
      </h1>

      {
        cartItems.length > 0
          ?
          <div className='w-full md:w-[80%] mt-8 ring ring-slate-200 mx-auto p-3 rounded-md'>
            <div className='flex flex-col lg:flex-row items-start justify-between gap-4 my-4'>

              {/* Left side */}
              <div className='w-full flex flex-col gap-4'>
                {
                  cartItems.map(cartItem => (
                    <CartItemCard cartItem={cartItem} key={cartItem.id} />
                  ))

                }
              </div>

              {/* Right side */}
              <div className='w-full lg:w-[40%] flex flex-col ring ring-slate-300 shadow-xl gap-4 p-3 rounded-md'>
                <h1 className='text-2xl font-semibold'>
                  Summary
                </h1>
                <div className='ring ring-blue-200 p-2 rounded-md flex flex-col gap-1 font-semibold'>
                  <p>Sub-total - {subTotal}</p>
                  <p>Shipping - {subTotal > 0 ? 100 : 0}</p>
                  <p>GST - {gst}</p>
                </div>
                <h2 className='ring ring-blue-200 p-2 font-semibold rounded-md'>
                  Total - {total}
                </h2>
                <button 
                  className='bg-black text-white p-2 rounded-md cursor-pointer'
                  onClick={() => navigate('/address')}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
          :
          <div className='flex flex-col mt-10 items-center'>
            <img src={emptyCart} alt="empty cart" className='h-[200px] w-[180px] sm:h-[260px] sm:w-[240px]' />
            <h1 className='text-2xl font-semibold'>
              No Item in Cart!!
            </h1>
          </div>
      }

    </div>
  )
}

export default Cart