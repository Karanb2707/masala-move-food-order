import React, { useState } from 'react'
import CartItemCard from '../components/CartItemCard'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/images/empty_cart.png';
import AddressCard from '../components/AddressCard';
import { addOrders } from '../redux/slices/orderSlice';
import { clearCart } from '../redux/slices/cartSlice';
import { ShoppingBag, Receipt, Truck, CreditCard, MapPin, Plus, Edit3, CheckCircle } from 'lucide-react';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Calculation part
  const subTotal = cartItems.reduce((sum, item) => sum + parseFloat(item.shownPrice) * item.quantity, 0);
  const shipping = subTotal > 0 ? 100 : 0;
  const gst = parseFloat((subTotal * 0.18).toFixed(2));
  const total = (subTotal + shipping + gst).toFixed(2);

  const orderId = Date.now();
  const orderData = { 
    id: orderId, 
    orders: cartItems, 
    subTotal: subTotal, 
    shipping: shipping,
    gst: gst, 
    total: total 
  };

  const handleCheckout = () => {
    dispatch(addOrders(orderData));
    dispatch(clearCart());
  }

  const hasAddress = Object.keys(address).length > 0;
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Address Display Component
  const AddressDisplay = ({ address, onEdit }) => (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-green-800">Delivery Address</h3>
        </div>
        <button 
          onClick={onEdit}
          className="text-green-600 hover:text-green-700 p-1"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
      <div className="text-sm text-green-700 space-y-1">
        <p>{address.houseno}, {address.apartment}</p>
        <p>{address.street}</p>
        <p>{address.city}, {address.state} - {address.zipcode}</p>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-2'>
            <ShoppingBag className='w-8 h-8 text-orange-500' />
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
              Your Cart
            </h1>
          </div>
          {cartItems.length > 0 && (
            <p className='text-gray-600'>
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          )}
        </div>

        {cartItems.length > 0 ? (
          <div className='space-y-8'>
            {/* OPTION 1: Address Section at Top (Recommended) */}
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
              <div className='px-6 py-4 border-b border-gray-200'>
                <h2 className='text-xl font-semibold text-gray-900 flex items-center gap-2'>
                  <MapPin className='w-5 h-5' />
                  Delivery Information
                </h2>
              </div>
              <div className='p-6'>
                {hasAddress ? (
                  <AddressDisplay 
                    address={address} 
                    onEdit={() => setShowAddressForm(!showAddressForm)}
                  />
                ) : (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-orange-800 mb-1">
                          Add Delivery Address
                        </h3>
                        <p className="text-sm text-orange-700">
                          We need your address to calculate delivery charges and process your order.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowAddressForm(true)}
                        className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Address Form Toggle */}
                {showAddressForm && (
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <AddressCard />
                  </div>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Cart Items Section */}
              <div className='lg:col-span-2'>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
                  <div className='px-6 py-4 border-b border-gray-200'>
                    <h2 className='text-xl font-semibold text-gray-900 flex items-center gap-2'>
                      <Receipt className='w-5 h-5' />
                      Items in Cart
                    </h2>
                  </div>
                  <div className='divide-y divide-gray-200'>
                    {cartItems.map((cartItem) => (
                      <div key={cartItem.id} className='p-6'>
                        <CartItemCard cartItem={cartItem} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary Section - Clean without address clutter */}
              <div className='lg:col-span-1'>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 sticky top-6'>
                  <div className='px-6 py-4 border-b border-gray-200'>
                    <h2 className='text-xl font-semibold text-gray-900'>
                      Order Summary
                    </h2>
                  </div>
                  
                  <div className='p-6 space-y-4'>
                    {/* Price Breakdown */}
                    <div className='space-y-3'>
                      <div className='flex justify-between text-gray-600'>
                        <span>Subtotal</span>
                        <span>₹{subTotal.toFixed(2)}</span>
                      </div>
                      
                      <div className='flex justify-between items-center text-gray-600'>
                        <div className='flex items-center gap-1'>
                          <Truck className='w-4 h-4' />
                          <span>Shipping</span>
                        </div>
                        <span>₹{shipping.toFixed(2)}</span>
                      </div>
                      
                      <div className='flex justify-between text-gray-600'>
                        <span>GST (18%)</span>
                        <span>₹{gst.toFixed(2)}</span>
                      </div>
                      
                      <div className='border-t border-gray-200 pt-3'>
                        <div className='flex justify-between items-center text-lg font-bold text-gray-900'>
                          <span>Total</span>
                          <span>₹{total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <div className='border-t border-gray-200 pt-4'>
                      {hasAddress ? (
                        <button
                          onClick={handleCheckout}
                          className='w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                        >
                          <CreditCard className='w-5 h-5' />
                          Proceed to Checkout
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowAddressForm(true)}
                          className='w-full bg-gray-100 text-gray-600 font-semibold py-3 px-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 flex items-center justify-center gap-2'
                        >
                          <MapPin className='w-5 h-5' />
                          Add Address to Continue
                        </button>
                      )}
                    
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className='text-center'>
            <div className='max-w-md mx-auto'>
              <div className='mb-8'>
                <img 
                  src={emptyCart} 
                  alt="Empty cart illustration" 
                  className='h-48 w-48 sm:h-64 sm:w-64 mx-auto object-contain' 
                />
              </div>
              
              <div className='space-y-2 '>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                  Your cart is empty
                </h2>
                
                <p className='text-gray-600 text-lg'>
                  Looks like you haven't added any items to your cart yet.
                </p>
            
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart