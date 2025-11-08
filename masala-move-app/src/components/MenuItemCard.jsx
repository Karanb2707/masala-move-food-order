import React, { useState, useContext } from 'react';
import { IoMdStar, IoMdAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice.js';
import { UserContext } from '../context/UserContext';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const MenuItemCard = ({ itemData }) => {
    const { id, name, desc, image, rating, price } = itemData;
    const shownPrice = price.toFixed(2);
    const imgUrl = image;
    const itemInfo = { id, name, imgUrl, shownPrice };

    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const toggleDescription = () => setShowFullDesc(prev => !prev);

    const shouldTruncate = desc && desc.length > 150;
    const displayedDescription = showFullDesc || !shouldTruncate
        ? desc
        : `${desc.substring(0, 150)}...`;

    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some(item => item.id === id);
    const existingItem = cartItems.find(item => item.id === id);
    const itemCount = existingItem ? existingItem.quantity : 0;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useContext(UserContext);

    const handleAddItem = () => {
        if (!user) {
            setShowLoginPopup(true);
            return;
        }
        dispatch(addItem(itemInfo));
        toast.success("Item added in cart 🛒");
    };

    const handleRemoveItem = () => {
        dispatch(removeItem(id));
        toast.error("Item removed from cart 🛒");
    };

    const loginHandleClick = () => navigate('/login');

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 mx-2 my-3 p-4 rounded-xl bg-gradient-to-br from-white to-orange-50/30 border border-orange-300 shadow-md hover:shadow-lg transition-all duration-300 group">
                
                <div className="flex flex-col justify-between gap-2 flex-1">
                    <div>
                        <div className="flex items-start justify-between gap-2 p-2">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900  transition-colors">
                                {name}
                            </h2>
                            {rating && (
                                <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                                    <IoMdStar className="text-sm" />
                                    <span>{rating}</span>
                                </div>
                            )}
                        </div>
                        
                        <div className="flex items-baseline gap-2 mb-2 px-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                ₹{shownPrice}
                            </span>
                        </div>
                        
                        {desc && (
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed px-2">
                                {displayedDescription}
                                {shouldTruncate && (
                                    <button
                                        className="text-orange-600 font-semibold ml-1 hover:text-orange-700 transition-colors"
                                        onClick={toggleDescription}
                                    >
                                        {showFullDesc ? 'Less' : 'More'}
                                    </button>
                                )}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 md:w-[180px]">
                    {image && (
                        <div className="relative w-full h-[140px] rounded-lg overflow-hidden shadow-md group/img">
                            <img
                                src={imgUrl}
                                alt={name}
                                className="h-full w-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                            />
                        </div>
                    )}
                    
                    {isInCart ? (
                        <div className="flex items-center justify-between w-full h-11 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-md overflow-hidden">
                            <button
                                className="flex items-center justify-center w-11 h-full bg-red-600 transition-all active:scale-90"
                                onClick={handleRemoveItem}
                            >
                                <HiMinusSm className="text-2xl text-white font-bold" />
                            </button>
                            <span className="text-lg font-bold text-white">
                                {itemCount}
                            </span>
                            <button
                                className="flex items-center justify-center w-11 h-full bg-green-600 transition-all active:scale-90"
                                onClick={handleAddItem}
                            >
                                <IoMdAdd className="text-2xl text-white font-bold" />
                            </button>
                        </div>
                    ) : (
                        <button
                            className="w-full h-11 font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 active:scale-95"
                            onClick={handleAddItem}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>

            {showLoginPopup && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-3xl">🔐</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Login Required</h2>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Sign in to add items to your cart and place orders.
                        </p>
                        <div className="flex gap-3">
                            <button
                                className="flex-1 px-5 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-95"
                                onClick={() => setShowLoginPopup(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all active:scale-95"
                                onClick={loginHandleClick}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuItemCard;