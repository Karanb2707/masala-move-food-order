export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative group">
        <span className="absolute bg-green-700 text-white text-sm font-semibold px-6 py-1.5 rounded-md transition-all duration-300 group-hover:scale-110 group-hover:bg-green-700 z-10 pointer-events-none">
          Veg
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};