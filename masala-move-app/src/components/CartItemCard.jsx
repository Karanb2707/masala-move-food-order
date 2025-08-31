import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import logo from '../assets/images/logo.png'

const CartItemCard = () => {
    return (
        <div className='flex items-center justify-evenly ring ring-slate-300 p-2 rounded-md'>
            <img src={logo} alt="food img" className='h-[70px] w-[80px] ring ring-orange-200 rounded-md'/>
            <div className='flex flex-col gap-1'>
                <p className='text-[18px] font-semibold'>
                    Name
                </p>
                <p className='text-[16px] font-semibold'>
                    Price
                </p>
            </div>
            <div className='w-[120px] h-8 flex items-center justify-between gap-2 ring-1 ring-gray-400 rounded-lg'>
                <IoMdAdd
                    className='text-[18px] cursor-pointer text-green-700 ml-2'
                />
                <p className='text-[16px] text-orange-600 font-semibold'>
                    1
                </p>
                <HiMinusSm
                    className='text-[18px] cursor-pointer text-red-700 mr-2'
                />
            </div>
             <div className='flex flex-col gap-1'>
                <p className='text-[16px] font-semibold'>
                    Total Price
                </p>
                <p className='text-[16px] font-semibold'>
                    Price
                </p>
            </div>
        </div>
    )
}

export default CartItemCard