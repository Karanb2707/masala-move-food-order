import React from 'react';

const ShimarUIComp = ({ type }) => {
  return (
    <div className="flex justify-center w-full px-4">
      {type === 'Menu' ? (
        // Menu Skeleton
        <div className="w-full max-w-[1000px] flex flex-col gap-4 mt-8">
          {/* Restaurant Info placeholder */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-[200px] md:h-[240px] w-full rounded-md bg-gray-200 animate-pulse" />
          </div>

          {/* Menu placeholder */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-[70px] md:h-[80px] rounded-md bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        // Restaurant Card Skeleton
        <div className="w-[90%] sm:w-[260px] flex flex-col rounded-lg overflow-hidden shadow-sm bg-white p-2 gap-3">
          {/* Image placeholder */}
          <div className="h-[160px] sm:h-[180px] bg-gray-200 rounded-md animate-pulse" />

          {/* Text lines */}
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default ShimarUIComp;
