import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { IoMdCart } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { IoCallSharp, IoPhonePortraitOutline } from "react-icons/io5";
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserName('Karan');
    }, 2000);
    return () => clearTimeout(timer);
  }, [setUserName]);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();
  const cartHandleClick = () => {
    navigate('cart');
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center px-4 sm:px-10 py-2 shadow-sm shadow-gray-500'>
      
      {/* Logo */}
      <img src={logo} alt="Logo" className='w-[80px] h-[50px] cursor-pointer' />

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
        <ul className='flex gap-8 font-semibold'>
          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex items-center gap-1'><IoIosHome /> Home</div>
            </NavLink>
          </li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/order' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex items-center gap-1'><TiShoppingCart /> Order</div>
            </NavLink>
          </li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex items-center gap-1'><IoPhonePortraitOutline /> About Us</div>
            </NavLink>
          </li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer text-[16px]'>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
              <div className='flex items-center gap-1'><IoCallSharp /> Contact Us</div>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Right Section */}
      <div className='flex items-center gap-6'>
        {/* Cart */}
        <div className='relative inline-block'>
          <IoMdCart 
            className='text-[32px] text-orange-600 cursor-pointer'
            onClick={cartHandleClick}
          />
          <span className='absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 text-xs bg-orange-600 text-white font-semibold rounded-full'>
            { totalQuantity }
          </span>
        </div>

        {/* User */}
        <div className='hidden sm:flex gap-2 items-center'>
          <FaUserCircle className='text-3xl text-orange-600 cursor-pointer' />
          <h2 className='text-orange-600 font-semibold'>{userName}</h2>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className='md:hidden text-2xl text-orange-600'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-[64px] left-0 w-full bg-white shadow-md md:hidden'>
          <ul className='flex flex-col gap-4 font-semibold p-4'>
            <li>
              <NavLink to='/' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
                <div className='flex items-center gap-2'><IoIosHome /> Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/order' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
                <div className='flex items-center gap-2'><TiShoppingCart /> Order</div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
                <div className='flex items-center gap-2'><IoPhonePortraitOutline /> About Us</div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'text-orange-600' : ''}>
                <div className='flex items-center gap-2'><IoCallSharp /> Contact Us</div>
              </NavLink>
            </li>
            <li className='flex gap-2 items-center mt-2'>
              <FaUserCircle className='text-2xl text-orange-600' />
              <h2 className='text-orange-600 font-semibold'>{userName}</h2>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
