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
        <div>
            {
                resInfo === null
                    ? <ShimarUIComp type='Menu' />
                    : (
                        <div className="flex flex-col items-center gap-4 mt-8 mb-8 px-4">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
                                <img
                                    src={resInfo.image}
                                    alt="restaurant"
                                    className="h-[230px] w-full md:w-[340px] rounded-lg object-cover hover:scale-105 transition-transform duration-300 shadow-md"
                                />
                                <div className="flex flex-col gap-6 shadow-md border border-slate-300 px-6 py-4 rounded-lg w-full bg-white">
                                    <h1 className="text-2xl md:text-3xl font-semibold">{resInfo.name}</h1>
                                    <div className="flex flex-col gap-2 text-sm md:text-base font-medium bg-slate-50 rounded-md px-4 py-3 shadow-inner">
                                        <div className="flex flex-wrap items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <IoMdStar className="text-orange-600 text-lg" />
                                                <p>{resInfo.avgRating}</p>
                                            </div>
                                            <h2 className="text-gray-700">{resInfo.costForTwo}</h2>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <IoFastFood className="text-orange-600" />
                                            <p>{resInfo.cuisines.join(', ')}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <IoLocationSharp className="text-orange-600" />
                                            <p>{resInfo.name}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <IoTime className="text-orange-600" />
                                            <p>{resInfo.sla.slaString}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full max-w-4xl mt-6">
                                {menuData.length > 0
                                    ? menuData.map((menu, index) => (
                                        <MenuOuterCard
                                            menu={menu}
                                            key={index}
                                            showItems={index === showIndex}
                                            setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                                        />
                                    ))
                                    : <div className="text-gray-500 text-xl font-semibold">No Menu Found</div>
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Menu;