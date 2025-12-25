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
            {/* <p className='mt-2 text-sm'>
                <span className='font-bold'>Note - </span>
                No imgaes right now due to some issue
            </p> */}
            <div className='flex flex-col md:flex-row w-[80%] mt-2 md:w-fit justify-center items-center gap-4 bg-white shadow-lg border border-orange-200 p-6 rounded-2xl mx-auto'>
                <SearchComp
                    restaurants={allRestaurants}
                    setRestaurants={setRestaurants}
                    setSearching={setSearching}
                    handleShowAll={handleShowAll}
                />
                <div className='flex flex-col md:flex-row gap-3 w-full'>
                    <button
                        className='flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 active:scale-95'
                        onClick={handleShowAll}
                    >
                        All
                    </button>
                    <button
                        className='flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 active:scale-95'
                        onClick={handleTopRatedRestro}
                    >
                        Top Rated
                    </button>
                </div>
            </div>
            <div className='w-[80%] md:w-[90%]'>
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
