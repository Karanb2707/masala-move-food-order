import React, { useEffect, useState } from 'react';
import SearchComp from './SearchComp';
import RestraurantCard from './RestraurantCard';
import ShimarUIComp from './ShimarUIComp';
import { API_URL } from '../utils/constants';
import useFetchApi from '../hooks/useFetchApi';
import { withVegLabel } from '../hooks/withVegLabel';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); // store original list for "All"
    const [searching, setSearching] = useState(false);

    // HOC 
    const VegRestraurantCard = withVegLabel(RestraurantCard);

    const { data } = useFetchApi({ url: API_URL });

    useEffect(() => {
        if (data) {
            const fetchRestaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestaurants(fetchRestaurants);
            setAllRestaurants(fetchRestaurants);

            console.log('Restaurants Data', fetchRestaurants);
        }
    }, [data]); // runs whenever API data changes

    const handleTopRatedRestro = () => {
        const topRatedRestaurants = restaurants.filter(res => res.info.avgRating >= 4.5);
        setRestaurants(topRatedRestaurants);
    };

    const handleShowAll = () => {
        setRestaurants(allRestaurants);
    };

    return (
        <div className='flex flex-col items-center justify-center mt-5 gap-4'>
            {/* Search Compo and Filter */}
            <div className='flex flex-col md:flex-row justify-center items-evenly gap-4'>
                <SearchComp
                    restaurants={restaurants}
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

            {/* Restaurants */}
            <div className='w-[80%]'>
                <h1 className='text-center text-3xl font-bold'>All Restaurants</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10'>
                    {
                        restaurants === null ? (
                            <>
                                <ShimarUIComp />
                                <ShimarUIComp />
                                <ShimarUIComp />
                                <ShimarUIComp />
                            </>
                        ) : restaurants?.length > 0 ? (
                            restaurants.map(restaurant => (
                                restaurant?.info?.veg
                                ?
                                <VegRestraurantCard restroData={restaurant} key={restaurant.info.id} />
                                :
                                <RestraurantCard restroData={restaurant} key={restaurant.info.id} />
                            ))
                        ) : searching ? (
                            <p className='col-span-full text-center text-red-500 text-2xl font-semibold mt-10'>
                                No data found
                            </p>
                        ) : (
                            <>
                                <ShimarUIComp />
                                <ShimarUIComp />
                                <ShimarUIComp />
                                <ShimarUIComp />
                            </>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Body;
