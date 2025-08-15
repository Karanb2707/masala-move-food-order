import React from 'react'
import { IoMdStar } from "react-icons/io";
// import restroImg1 from '../assets/images/pizza.png'
import { CDN_URL } from '../utils/constants.js';
import { useNavigate } from 'react-router-dom';

const RestraurantCard = ({ restroData }) => {

    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = restroData.info;
    const imgurl = CDN_URL + cloudinaryImageId;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`restaurant/${restroData.info.id}`)
    }

    return (
        <div className='flex flex-col p-1 rounded-xl hover:scale-105 transition duration-300 shadow-sm hover:shadow-lg shadow-gray-600 hover:ring ring-orange-700'
            onClick={handleClick}>
            <img src={imgurl} alt="food image" className='h-[200px] rounded-md' />
            <div>
                <h2 className='text-2xl font-semibold p-1'>
                    {`${name.substring(0, 12)}...`}
                </h2>
                <div className='flex items-center justify-between p-1 font-semibold'>
                    <div className='flex items-center'>
                        <IoMdStar className='text-yellow-600' />
                        <p>{avgRating}</p>
                    </div>
                    <div className='text-[12px] text-gray-600'>
                        {sla.slaString}
                    </div>
                    <div>
                        {costForTwo}
                    </div>
                </div>
                <div className='p-1 text-gray-600'>
                    <p>{cuisines.slice(0, 2).join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default RestraurantCard