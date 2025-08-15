import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

const SearchComp = ({ restaurants, setRestaurants, fetchData }) => {
  const [searchText, setSearchText] = useState('');

  // Debounce Function
  const debounceFun = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query) {
      const filtered = restaurants.filter(res =>
        res.info.name.toLowerCase().includes(query) ||
        res.info.cuisines.some(cuisine =>
          cuisine.toLowerCase().includes(query)
        )
      );
      setRestaurants(filtered);
    } else {
      fetchData(); // Reset to original data
    }
  };

  const handleDebouncedSearch = debounceFun(handleSearch, 1000);

  return (
    <div className='flex items-center gap-2'>
      <input
        type="text"
        placeholder='Search Here!'
        className='border p-1.5 rounded-md'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleDebouncedSearch(e);
        }}
      />
      <IoMdSearch
        className='text-[28px] text-blue-600 cursor-pointer'
        onClick={() => handleSearch({ target: { value: searchText } })}
      />
    </div>
  );
};

export default SearchComp;