import React, { useContext, useState } from 'react';
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
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const navItems = [
    { to: '/', icon: IoIosHome, label: 'Home' },
    { to: '/order', icon: TiShoppingCart, label: 'Order' },
    { to: '/about', icon: IoPhonePortraitOutline, label: 'About' },
    { to: '/contact', icon: IoCallSharp, label: 'Contact' }
  ];

  const navLinkClass = ({ isActive }) => 
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive 
        ? 'text-white bg-gradient-to-r from-orange-600 to-amber-600 shadow-md' 
        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
    }`;

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-3'>
        
        <img src={logo} alt="Logo" className='w-[80px] h-[50px] cursor-pointer hover:scale-105 transition-transform duration-300' />

        <nav className='hidden md:block'>
          <ul className='flex gap-6 font-semibold'>
            {/* eslint-disable-next-line no-unused-vars */}
            {navItems.map(({ to, icon: NavIcon, label }) => (
              <li key={to}>
                <NavLink to={to} className={navLinkClass}>
                  <NavIcon className='text-lg' />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-5'>
          <div className='relative cursor-pointer group' onClick={() => navigate('cart')}>
            <div className='p-2 rounded-full hover:bg-orange-50 transition-colors'>
              <IoMdCart className='text-3xl text-orange-600 group-hover:scale-110 transition-transform' />
            </div>
            {totalQuantity > 0 && (
              <span className='absolute -top-1 -right-1 flex items-center justify-center min-w-[22px] h-[22px] px-1 text-xs bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-md'>
                {totalQuantity}
              </span>
            )}
          </div>

          <div className='hidden sm:flex items-center gap-3'>
            {user ? (
              <div className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-200'>
                <FaUserCircle className='text-2xl text-orange-600' />
                <h2 className='text-orange-600 font-semibold'>{user.name}</h2>
              </div>
            ) : (
              <button 
                className='px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all active:scale-95'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            )}
          </div>

          <button 
            className='md:hidden text-2xl text-orange-600 p-2 hover:bg-orange-50 rounded-lg transition-colors'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-orange-100'>
          <ul className='flex flex-col gap-2 p-4'>
            {/* eslint-disable-next-line no-unused-vars */}
            {navItems.map(({ to, icon: NavIcon, label }) => (
              <li key={to}>
                <NavLink to={to} onClick={() => setMenuOpen(false)} className={navLinkClass}>
                  <NavIcon className='text-xl' />
                  <span className='font-semibold'>{label}</span>
                </NavLink>
              </li>
            ))}
            <li className='mt-2 pt-2 border-t border-orange-100'>
              {user ? (
                <div className='flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg'>
                  <FaUserCircle className='text-2xl text-orange-600' />
                  <h2 className='text-orange-600 font-semibold'>{user.name}</h2>
                </div>
              ) : (
                <button 
                  className='w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95'
                  onClick={() => { setMenuOpen(false); navigate('/login'); }}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
