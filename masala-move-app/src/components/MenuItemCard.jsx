import React, { useState } from 'react';
import { IoMdStar } from "react-icons/io";
import { CDN_URL } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice.js';

const MenuItemCard = ({ itemData }) => {
    const info = itemData?.card?.info;
    const { id, name, description, imageId, ratings, defaultPrice, price } = info;

    const finalPrice = defaultPrice ?? price ?? 0;
    const shownPrice = (finalPrice / 100).toFixed(2);

    const rating = ratings?.aggregatedRating?.rating ?? null;
    const imgUrl = CDN_URL + imageId;

    const itemInfo = {id, name, imgUrl, shownPrice};

    const [showFullDesc, setShowFullDesc] = useState(false);

    const toggleDescription = () => setShowFullDesc(prev => !prev);

    const shouldTruncate = description && description.length > 200;
    const displayedDescription = showFullDesc || !shouldTruncate
        ? description
        : `${description.substring(0, 200)}...`;

    const cartItems = useSelector((state) => state.cart.items);
    console.log('Cart Data', cartItems);

    const isInCart = cartItems.some(item => item.id === id);

    const dispatch = useDispatch();
    
    const handleAddItem = (itemInfo) => {
        dispatch(addItem(itemInfo));
    }
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 m-4 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-transform duration-300">
            {/* Left Section */}
            <div className="flex flex-col gap-2 w-full md:w-[70%]">
                <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
                <p className="text-base font-semibold text-gray-800">
                    ₹ {shownPrice}
                </p>
                <div className="flex items-center gap-1 text-sm md:text-base font-medium text-gray-700">
                    <IoMdStar className="text-orange-600" />
                    <p>{rating ? rating : "No Rating"}</p>
                </div>
                {description && (
                    <p className="text-sm text-gray-600">
                        {displayedDescription}
                        {shouldTruncate && (
                            <span
                                className="text-blue-600 cursor-pointer ml-1 hover:underline"
                                onClick={toggleDescription}
                            >
                                {showFullDesc ? 'Less' : 'More'}
                            </span>
                        )}
                    </p>
                )}
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center gap-2 w-full md:w-[30%]">
                {imageId && (
                    <img
                        src={imgUrl}
                        alt="food"
                        className="h-[160px] w-full md:w-[220px] object-cover rounded-md shadow-sm border"
                    />
                )}
                {
                    isInCart
                        ?
                        <button
                            className="w-full h-9 bg-red-600 font-semibold text-white rounded-lg hover:bg-red-700 active:scale-95 transition"
                            onClick={() => handleRemoveItem(id)}
                        >
                            Remove
                        </button>
                        :
                        <button
                            className="w-full h-9 bg-green-600 font-semibold text-white rounded-lg hover:bg-green-700 active:scale-95 transition"
                            onClick={() => handleAddItem(itemInfo)}
                        >
                            Add
                        </button>
                }
            </div>
        </div>

    );
};

export default MenuItemCard;
