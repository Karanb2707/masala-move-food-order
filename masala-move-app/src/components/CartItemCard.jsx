import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice';

const CartItemCard = ({ cartItem }) => {

    const { id, name, shownPrice, imgUrl, quantity } = cartItem;
    const totalPrice = parseFloat(shownPrice) * quantity;

    const dispatch = useDispatch();

    const handleAddItem = (cartItem) => {
        dispatch(addItem(cartItem));
    }
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-evenly ring ring-slate-300 p-2 rounded-md gap-4'>
            <div className='flex items-center justify-evenly gap-6'>
                <img src={imgUrl} alt="food img" className='h-[70px] w-[80px] ring ring-orange-200 rounded-md' />

                <div className='flex flex-col gap-1 text-center sm:text-left'>
                    <p className='text-[16px] font-semibold'>
                        {`${name.substring(0, 20)}...`}
                    </p>
                    <p className='text-[16px] font-semibold '>
                        Price - ₹{parseFloat(shownPrice)}
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-evenly gap-10'>
                <div className='w-[120px] h-8 flex items-center justify-between gap-2 ring-1 ring-gray-400 rounded-lg'>
                    <IoMdAdd
                        className='text-[18px] cursor-pointer text-green-700 ml-2'
                        onClick={() => handleAddItem(cartItem)}
                    />
                    <p className='text-[16px] text-orange-600 font-semibold'>
                        {quantity}
                    </p>
                    <HiMinusSm
                        className='text-[18px] cursor-pointer text-red-700 mr-2'
                        onClick={() => handleRemoveItem(id)}
                    />
                </div>

                <div className='flex flex-row md:flex-col gap-1 text-center sm:text-left'>
                    <p className='text-[16px] font-semibold'>
                        Total Price
                    </p>
                    <p className='text-[16px] font-semibold'>
                        ₹{totalPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard
