import React from 'react';
import { IoMdStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const RestraurantCard = ({ restroData }) => {
  const { id, name, cuisines, avgRating, costForTwo, sla, image } = restroData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div
      className='flex flex-col p-1 rounded-xl hover:scale-105 transition duration-300 shadow-sm hover:shadow-lg shadow-gray-600 hover:ring ring-orange-700'
      onClick={handleClick}
    >
      <img src={image} alt={name} className='h-[200px] w-full rounded-md object-cover' />
      <div>
        <h2 className='text-2xl font-semibold p-1'>
          {name.length > 12 ? `${name.substring(0, 12)}...` : name}
        </h2>
        <div className='flex items-center justify-between p-1 font-semibold'>
          <div className='flex items-center'>
            <IoMdStar className='text-yellow-600' />
            <p>{avgRating}</p>
          </div>
          <div className='text-[12px] text-gray-600'>
            {sla?.slaString}
          </div>
          <div>{costForTwo}</div>
        </div>
        <div className='p-1 text-gray-600'>
          <p>{cuisines.slice(0, 2).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default RestraurantCard;
