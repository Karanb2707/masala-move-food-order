import React, { useEffect, useState } from 'react';
import SearchComp from './SearchComp';
import RestraurantCard from './RestraurantCard';
import ShimarUIComp from './ShimarUIComp';
import { withVegLabel } from '../hooks/withVegLabel';
import restaurantsData from '../utils/restaurantsData';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searching, setSearching] = useState(false);

    const VegRestraurantCard = withVegLabel(RestraurantCard);

    useEffect(() => {
        setRestaurants(restaurantsData);
        setAllRestaurants(restaurantsData);
    }, []);

    const handleTopRatedRestro = () => {
        const topRatedRestaurants = allRestaurants.filter(res => res.avgRating >= 4.5);
        setRestaurants(topRatedRestaurants);
    };

    const handleShowAll = () => {
        setRestaurants(allRestaurants);
    };

    return (
        <div className='flex flex-col items-center justify-center mt-5 gap-4'>
            <div className='flex flex-col md:flex-row justify-center items-evenly gap-4'>
                <SearchComp
                    restaurants={allRestaurants}
                    setRestaurants={setRestaurants}
                    setSearching={setSearching}
                    handleShowAll={handleShowAll}
                />
                <button
                    className='py-1 px-2 ring ring-orange-500 bg-amber-300 font-semibold rounded-sm cursor-pointer'
                    onClick={handleShowAll}
                >
                    All
                </button>
                <button
                    className='py-1 px-2 ring ring-orange-500 bg-amber-300 font-semibold rounded-sm cursor-pointer'
                    onClick={handleTopRatedRestro}
                >
                    Top Rated
                </button>
            </div>

            <div className='w-[80%]'>
                <h1 className='text-center text-3xl font-bold'>All Restaurants</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10'>
                    {restaurants.length === 0 && !searching ? (
                        <>
                            <ShimarUIComp /><ShimarUIComp /><ShimarUIComp /><ShimarUIComp />
                        </>
                    ) : restaurants.length > 0 ? (
                        restaurants.map(restaurant =>
                            restaurant.veg ? (
                                <VegRestraurantCard restroData={restaurant} key={restaurant.id} />
                            ) : (
                                <RestraurantCard restroData={restaurant} key={restaurant.id} />
                            )
                        )
                    ) : (
                        <p className='col-span-full text-center text-red-500 text-2xl font-semibold mt-10'>
                            No data found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
