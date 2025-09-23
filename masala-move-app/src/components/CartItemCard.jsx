import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice';
import toast from "react-hot-toast";

const CartItemCard = ({ cartItem }) => {
    const { id, name, shownPrice, imgUrl, quantity } = cartItem;
    const totalPrice = parseFloat(shownPrice) * quantity;

    const dispatch = useDispatch();

    const handleAddItem = (cartItem) => {
        dispatch(addItem(cartItem));
        toast.success("Item added in cart 🛒");
    }
    
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
        toast.error("Item removed from cart 🛒");
    }

    return (
        <div className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200'>
            {/* Mobile Layout */}
            <div className='flex flex-col space-y-4 md:hidden'>
                {/* Image and Info Row */}
                <div className='flex items-center space-x-4'>
                    <img 
                        src={imgUrl} 
                        alt={name} 
                        className='h-16 w-16 object-cover rounded-lg border border-orange-100' 
                    />
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-sm font-semibold text-gray-900 truncate'>
                            {name.length > 25 ? `${name.substring(0, 25)}...` : name}
                        </h3>
                        <p className='text-sm text-gray-600 mt-1'>
                            ₹{parseFloat(shownPrice).toFixed(2)}
                        </p>
                    </div>
                </div>

                {/* Quantity and Total Row */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center bg-gray-50 rounded-lg border border-gray-200'>
                        <button
                            onClick={() => handleRemoveItem(id)}
                            className='p-2 text-red-600 hover:bg-red-50 rounded-l-lg transition-colors duration-150'
                            aria-label="Decrease quantity"
                        >
                            <HiMinusSm className='w-4 h-4' />
                        </button>
                        <span className='px-4 py-2 text-sm font-semibold text-gray-900 min-w-[3rem] text-center'>
                            {quantity}
                        </span>
                        <button
                            onClick={() => handleAddItem(cartItem)}
                            className='p-2 text-green-600 hover:bg-green-50 rounded-r-lg transition-colors duration-150'
                            aria-label="Increase quantity"
                        >
                            <IoMdAdd className='w-4 h-4' />
                        </button>
                    </div>
                    
                    <div className='text-right'>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Total</p>
                        <p className='text-lg font-bold text-gray-900'>
                            ₹{totalPrice.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden md:flex md:items-center md:justify-between md:space-x-6'>
                {/* Product Info Section */}
                <div className='flex items-center space-x-4 flex-1 min-w-0'>
                    <img 
                        src={imgUrl} 
                        alt={name} 
                        className='h-18 w-20 object-cover rounded-lg border border-orange-100 flex-shrink-0' 
                    />
                    <div className='min-w-0 flex-1'>
                        <h3 className='text-base font-semibold text-gray-900 truncate'>
                            {name.length > 30 ? `${name.substring(0, 30)}...` : name}
                        </h3>
                        <p className='text-sm text-gray-600 mt-1'>
                            ₹{parseFloat(shownPrice).toFixed(2)} each
                        </p>
                    </div>
                </div>

                {/* Quantity Controls */}
                <div className='flex items-center bg-gray-50 rounded-lg border border-gray-200'>
                    <button
                        onClick={() => handleRemoveItem(id)}
                        className='p-2 text-red-600 hover:bg-red-50 rounded-l-lg transition-colors duration-150'
                        aria-label="Decrease quantity"
                    >
                        <HiMinusSm className='w-4 h-4' />
                    </button>
                    <span className='px-4 py-2 text-sm font-semibold text-gray-900 min-w-[3rem] text-center'>
                        {quantity}
                    </span>
                    <button
                        onClick={() => handleAddItem(cartItem)}
                        className='p-2 text-green-600 hover:bg-green-50 rounded-r-lg transition-colors duration-150'
                        aria-label="Increase quantity"
                    >
                        <IoMdAdd className='w-4 h-4' />
                    </button>
                </div>

                {/* Total Price */}
                <div className='text-right min-w-[6rem]'>
                    <p className='text-xs text-gray-500 uppercase tracking-wide'>Total</p>
                    <p className='text-lg font-bold text-gray-900'>
                        ₹{totalPrice.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;