import React, { useEffect, useState } from 'react'
import ShimarUIComp from '../components/ShimarUIComp';
import { CDN_URL, MENU_API } from '../utils/constants.js';
import { IoMdStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { IoFastFood } from "react-icons/io5";
import MenuOuterCard from '../components/MenuOuterCard.jsx';
import useFetchApi from '../hooks/useFetchApi.js';

const Menu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menuData, setMenuData] = useState([]);
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const { data } = useFetchApi({ url: MENU_API, resId: resId })

    useEffect(() => {
        if (data) {
            console.log('Data', data);
            const fetchResInfoData = data?.data?.cards[2]?.card?.card?.info;

            const allCards = data?.data?.cards?.find(
                c => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
            )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            const filteredMenuData = allCards.filter(
                card => Array.isArray(card?.card?.card?.itemCards)
            );

            setResInfo(fetchResInfoData);
            setMenuData(filteredMenuData);
            window.scrollTo(0,0);
        }
    }, [data]);

    const imgurl = CDN_URL + resInfo?.cloudinaryImageId;

    return (
        <div>
            {
                resInfo === null
                    ?
                    <ShimarUIComp type='Menu' />
                    :
                    <div className="flex flex-col items-center gap-4 mt-8 mb-8 px-4">

                        {/* Restaurant Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
                            <img
                                src={imgurl}
                                alt="restaurant image"
                                className="h-[230px] w-full md:w-[340px] rounded-lg object-cover hover:scale-105 transition-transform duration-300 shadow-md"
                            />
                            <div className="flex flex-col gap-6 shadow-md border border-slate-300 px-6 py-4 rounded-lg w-full bg-white">
                                <h1 className="text-2xl md:text-3xl font-semibold">{resInfo.name}</h1>
                                <div className="flex flex-col gap-2 text-sm md:text-base font-medium bg-slate-50 rounded-md px-4 py-3 shadow-inner">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <IoMdStar className="text-orange-600 text-lg" />
                                            <p>{resInfo.avgRating} ({resInfo.totalRatingsString})</p>
                                        </div>
                                        <h2 className="text-gray-700">{resInfo.costForTwoMessage}</h2>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <IoFastFood className="text-orange-600" />
                                        <p>{resInfo.cuisines?.join(', ')}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <IoLocationSharp className="text-orange-600" />
                                        <p>{resInfo.locality}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <IoTime className="text-orange-600" />
                                        <p>{resInfo.sla.slaString}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Section */}
                        <div className="flex flex-col items-center w-full max-w-4xl mt-6">
                            {menuData.length > 0
                                ? menuData.map((menuCard, index) => (
                                    <MenuOuterCard
                                        menu={menuCard}
                                        key={index}
                                        showItems={index === showIndex ? true : false}
                                        setShowIndex={
                                            () => setShowIndex(showIndex === index ? null : index)
                                        }
                                    />
                                ))
                                : <div className="text-gray-500 text-xl font-semibold">No Menu Found</div>
                            }
                        </div>
                    </div>


            }
        </div>
    )
}

export default Menu