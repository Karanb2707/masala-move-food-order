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
                            <div className="flex flex-col md:flex-row items-start gap-6 w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
                                <div className="relative w-full md:w-[400px] h-[280px] overflow-hidden group">
                                    <img
                                        src={resInfo.image}
                                        alt="restaurant"
                                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                
                                <div className="flex flex-col gap-5 p-6 flex-1">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{resInfo.name}</h1>
                                    
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-lg font-semibold shadow-md">
                                                <IoMdStar className="text-lg" />
                                                <span>{resInfo.avgRating}</span>
                                            </div>
                                            <span className="text-gray-600 font-medium text-lg">{resInfo.costForTwo}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2.5 text-gray-700 hover:text-orange-600 transition-colors">
                                            <IoFastFood className="text-orange-500 text-xl flex-shrink-0" />
                                            <p className="font-medium">{resInfo.cuisines.join(', ')}</p>
                                        </div>
                                        
                                        <div className="flex items-center gap-2.5 text-gray-700 hover:text-orange-600 transition-colors">
                                            <IoLocationSharp className="text-orange-500 text-xl flex-shrink-0" />
                                            <p className="font-medium">{resInfo.name}</p>
                                        </div>
                                        
                                        <div className="flex items-center gap-2.5 text-gray-700 hover:text-orange-600 transition-colors">
                                            <IoTime className="text-orange-500 text-xl flex-shrink-0" />
                                            <p className="font-medium">{resInfo.sla.slaString}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full max-w-5xl gap-4">
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