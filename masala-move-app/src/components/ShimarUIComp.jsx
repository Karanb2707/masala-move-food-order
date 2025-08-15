import React from 'react'

const ShimarUIComp = ({ type }) => {
  return (
    <div className="flex justify-center">
      {type === 'Menu' ? (
        // Menu Skeleton
        <div className="w-[860px] flex flex-col gap-4 mt-8">
          {/* Restaurant Info placeholder */}
          <div className="flex gap-4">
            <div className="h-[240px] w-[260px] rounded-md bg-gray-200 animate-pulse" />
            <div className="h-[240px] flex-1 rounded-md bg-gray-200 animate-pulse" />
          </div>
          {/* Menu placeholder */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[80px] rounded-md bg-gray-200 animate-pulse" />
          ))}
        </div>
      ) : (
        // Restaurant Card Skeleton
        <div className="w-[260px] flex flex-col rounded-lg overflow-hidden shadow-sm bg-white p-2 gap-3">
          {/* Image placeholder */}
          <div className="h-[180px] bg-gray-200 rounded-md animate-pulse" />

          {/* Text lines */}
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-md animate-pulse" />
        </div>

      )}
    </div>
  )
}

export default ShimarUIComp
