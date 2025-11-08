import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";

const SearchComp = ({ restaurants, setRestaurants, setSearching, handleShowAll }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const query = searchText.toLowerCase();

    if (query) {
      setSearching(true);
      const filtered = restaurants.filter(res =>
        res.name.toLowerCase().includes(query) ||
        res.cuisines.some(cuisine => cuisine.toLowerCase().includes(query))
      );
      setRestaurants(filtered);
    } else {
      setSearching(false);
      handleShowAll();
    }
  };

  useEffect(() => {
    if (searchText === '') {
      setSearching(false);
      handleShowAll();
    }
  }, [searchText]);

  return (
    <div className='flex items-center gap-2 w-full md:w-auto'>
      <div className='relative flex-1 md:min-w-[280px]'>
        <input
          type='text'
          placeholder='Search restaurants...'
          className='w-full pl-4 pr-12 py-2.5 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 bg-white shadow-sm'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <IoMdSearch
          className='absolute right-3 top-1/2 -translate-y-1/2 text-[28px] text-orange-500 cursor-pointer hover:text-orange-600 hover:scale-110 transition-all duration-200 active:scale-95'
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchComp;