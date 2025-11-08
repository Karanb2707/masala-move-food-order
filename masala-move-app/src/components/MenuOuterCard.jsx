import React from 'react';
import MenuItemCard from './MenuItemCard';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MenuOuterCard = ({ menu, showItems, setShowIndex }) => {
    const title = menu?.title;
    const items = menu?.items || [];

    const toggleAccordion = () => {
        setShowIndex();
    };

    return (
        <div className="border border-slate-300 bg-white p-3 m-2 rounded-lg w-full mb-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <h1 className="px-4 py-2 text-lg md:text-xl font-semibold">
                    {title} ({items.length})
                </h1>
                <button
                    className="px-4 py-2 text-gray-600 hover:text-black transition"
                    onClick={toggleAccordion}
                >
                    {showItems ? <FaArrowUp /> : <FaArrowDown />}
                </button>
            </div>
            {
                showItems && (
                    Array.isArray(items)
                        ? items.map(item => (
                            <MenuItemCard itemData={item} key={item.id} />
                        ))
                        : <p className="text-gray-500 px-4">No items found</p>
                )
            }
        </div>
    );
};

export default MenuOuterCard;