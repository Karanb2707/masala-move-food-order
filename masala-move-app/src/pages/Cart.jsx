import React, { useState } from 'react'
import CartItemCard from '../components/CartItemCard'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/images/empty_cart.png';
import AddressCard from '../components/AddressCard';
import { addOrders } from '../redux/slices/orderSlice';
import { clearCart } from '../redux/slices/cartSlice';
import { ShoppingBag, MapPin, Plus, Minus } from 'lucide-react';
import { clearAddress } from '../redux/slices/addressSlice';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [showAddressForm, setShowAddressForm] = useState(false);

  const addressRef = useRef(null);

  const navigate = useNavigate();
  const handleStartShopping = () => {
    navigate('/')
  }

  // Calculations
  const subTotal = cartItems.reduce((sum, item) => sum + parseFloat(item.shownPrice) * item.quantity, 0);
  const shipping = subTotal > 0 ? 100 : 0;
  const gst = parseFloat((subTotal * 0.18).toFixed(2));
  const total = (subTotal + shipping + gst).toFixed(2);

  const handleCheckout = () => {
    const orderData = { 
      id: Date.now(), 
      orders: cartItems, 
      subTotal, 
      shipping,
      gst, 
      total 
    };
    dispatch(addOrders(orderData));
    dispatch(clearCart());
  }

  const handleScrollToAddress = () => {
    setShowAddressForm(true);
    addressRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleEditAddress = () => {
    setShowAddressForm(!showAddressForm);
    dispatch(clearAddress());
  }

  const hasAddress = Object.keys(address).length > 0;
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className='min-h-screen bg-gray-50 py-6'>
      <div className='max-w-6xl mx-auto px-4'>
        
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-2'>
            <ShoppingBag className='w-8 h-8 text-orange-500' />
            <h1 className='text-3xl font-bold text-gray-900'>Your Cart</h1>
          </div>
          {cartItems.length > 0 && <p className='text-gray-600'>{itemCount} items in your cart</p>}
        </div>

        {cartItems.length > 0 ? (
          <div className='space-y-6'>
            
            {/* Address Section */}
            <div
              ref={addressRef}
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'
            >
              <h2 className='text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4'>
                <MapPin className='w-5 h-5' />
                Delivery Address
              </h2>
              
              {hasAddress ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-green-800 mb-2">Address Saved</p>
                      <div className="text-sm text-green-700 space-y-1">
                        <p>{address.houseno}, {address.apartment}</p>
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} - {address.zipcode}</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleEditAddress}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-orange-800">Add Delivery Address</h3>
                      <p className="text-sm text-orange-700">Required to process your order</p>
                    </div>
                    <button
                      onClick={() => setShowAddressForm(!showAddressForm)}
                      className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600"
                    >
                      {
                        showAddressForm
                        ?
                        <Minus className="w-5 h-5" />
                        :
                        <Plus className="w-5 h-5" />
                      }
                    </button>
                  </div>
                </div>
              )}
              
              {showAddressForm
                ?
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <AddressCard setShowAddressForm={setShowAddressForm}/>
                </div>
                : 
                null
              }
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              
              {/* Cart Items */}
              <div className='lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200'>
                <div className='p-4 border-b border-gray-200'>
                  <h2 className='text-lg font-semibold text-gray-900'>Items ({cartItems.length})</h2>
                </div>
                <div className='divide-y divide-gray-200'>
                  {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className='p-4'>
                      <CartItemCard cartItem={cartItem} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className='bg-white rounded-lg shadow-sm border border-gray-200 h-fit sticky top-6'>
                <div className='p-4 border-b border-gray-200'>
                  <h2 className='text-lg font-semibold text-gray-900'>Order Summary</h2>
                </div>
                
                <div className='p-4 space-y-3'>
                  <div className='flex justify-between text-gray-600'>
                    <span>Subtotal</span>
                    <span>₹{subTotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>Shipping</span>
                    <span>₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>GST (18%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                  </div>
                  <div className='border-t border-gray-200 pt-3'>
                    <div className='flex justify-between text-lg font-bold text-gray-900'>
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  {hasAddress ? (
                    <button
                      onClick={handleCheckout}
                      className='w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors mt-4'
                    >
                      Proceed to Checkout
                    </button>
                  ) : (
                    <button
                      onClick={handleScrollToAddress}
                      className='w-full bg-gray-100 text-gray-600 font-semibold py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-colors mt-4'
                    >
                      Add Address to Continue
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <img src={emptyCart} alt="Empty cart" className='h-48 w-48 mx-auto object-contain mb-6' />
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Your cart is empty</h2>
            <p className='text-gray-600'>Add some items to get started</p>
            <div className="pt-6">
                  <button
                    onClick={handleStartShopping}
                    className='bg-orange-600 text-white px-4 py-2 rounded-md font-semibold cursor-pointer'
                  >
                    Start Shopping
                  </button>
                </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart