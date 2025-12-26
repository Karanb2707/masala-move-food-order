import React, { useEffect, useState } from 'react';
import ShimarUIComp from '../components/ShimarUIComp';
import { IoMdStar } from "react-icons/io";
import { IoLocationSharp, IoTime, IoFastFood } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import MenuOuterCard from '../components/MenuOuterCard.jsx';
import restaurantsData from '../utils/restaurantsData.js';

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuData, setMenuData] = useState([]);
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    useEffect(() => {
        const restaurant = restaurantsData.find(r => r.id === parseInt(resId));
        if (restaurant) {
            setResInfo(restaurant);
            setMenuData(restaurant.menu);
            window.scrollTo(0, 0);
        }
    }, [resId]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
            {
                resInfo === null
                    ? <ShimarUIComp type='Menu' />
                    : (
                        <div className="flex flex-col items-center gap-8 py-8 px-4">
                            <div className="flex flex-col lg:flex-row items-stretch gap-0 w-full md:w-[75%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                                <div className="relative w-full lg:w-[45%] h-[240px] lg:h-auto min-h-[280px] overflow-hidden group">
                                    <img
                                        src={resInfo.image}
                                        alt="restaurant"
                                        className="h-[360px] w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold shadow-lg backdrop-blur-sm">
                                        <IoMdStar className="text-lg" />
                                        <span>{resInfo.avgRating}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 p-6 lg:p-8 flex-1 justify-center">
                                    <div className="space-y-2">
                                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{resInfo.name}</h1>
                                        <p className="text-orange-600 font-semibold text-lg">{resInfo.costForTwo}</p>
                                    </div>

                                    <div className="flex flex-col gap-3.5 mt-2">
                                        <div className="flex items-center gap-3 text-gray-700 group/item hover:translate-x-1 transition-transform duration-200">
                                            <div className="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full flex-shrink-0 group-hover/item:bg-orange-100 transition-colors">
                                                <IoFastFood className="text-orange-600 text-xl" />
                                            </div>
                                            <p className="font-medium text-sm lg:text-base leading-snug">{resInfo.cuisines.join(', ')}</p>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-700 group/item hover:translate-x-1 transition-transform duration-200">
                                            <div className="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full flex-shrink-0 group-hover/item:bg-orange-100 transition-colors">
                                                <IoLocationSharp className="text-orange-600 text-xl" />
                                            </div>
                                            <p className="font-medium text-sm lg:text-base leading-snug">{resInfo.name}</p>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-700 group/item hover:translate-x-1 transition-transform duration-200">
                                            <div className="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full flex-shrink-0 group-hover/item:bg-orange-100 transition-colors">
                                                <IoTime className="text-orange-600 text-xl" />
                                            </div>
                                            <p className="font-medium text-sm lg:text-base leading-snug">{resInfo.sla.slaString}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full md:w-[70%] gap-4">
                                <h2 className="text-2xl font-bold text-gray-800 self-start">Menu</h2>
                                {menuData.length > 0
                                    ? menuData.map((menu, index) => (
                                        <MenuOuterCard
                                            menu={menu}
                                            key={index}
                                            showItems={index === showIndex}
                                            setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                                        />
                                    ))
                                    : <div className="text-gray-500 text-xl font-semibold py-10">No Menu Found</div>
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Menu;