import React, { useContext, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import { IoMdCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { IoCallSharp, IoLockOpenOutline, IoStatsChartOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaUserCircle } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const Header = () => {

  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserName('Karan');
    }, 2000);

    return () => clearTimeout(timer);
  }, [setUserName])

  return (
    <div className='flex justify-evenly items-center p-2 shadow-sm shadow-gray-500'>
      <img src={logo} alt="Logo Image" className='w-[80px] h-[50px] cursor-pointer' />
      <nav>
        <ul className='flex gap-8 font-semibold'>

          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex justify-center items-center gap-1'>
                <IoIosHome />
                Home
              </div>
            </NavLink>
          </li>

          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/order' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex justify-center items-center gap-1'>
                <TiShoppingCart />
                Order
              </div>
            </NavLink>
          </li>

          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex justify-center items-center gap-1'>
                <IoPhonePortraitOutline />
                About Us
              </div>
            </NavLink>
          </li>

          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex justify-center items-center gap-1'>
                <IoCallSharp />
                Contact Us
              </div>
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className='flex gap-10'>
        <IoMdCart className='text-3xl text-orange-600 cursor-pointer' />

        <div className='flex gap-3 items-center'>
          <FaUserCircle className='text-3xl text-orange-600 cursor-pointer' />
          <h2 className='text-orange-600 font-semibold'>
            {userName}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header