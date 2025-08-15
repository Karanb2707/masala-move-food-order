import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";

const SearchComp = ({ restaurants, setRestaurants, setSearching, handleShowAll }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const query = searchText.toLowerCase();

    if (query) {
      setSearching(true)
      const filtered = restaurants.filter(res =>
        res.info.name.toLowerCase().includes(query) ||
        res.info.cuisines.some(cuisine =>
          cuisine.toLowerCase().includes(query)
        )
      );
      setRestaurants(filtered);
    } else {
      setSearching(false);
      handleShowAll();
    }
  };

  useEffect(() => {
    if(searchText === '')
    {
      setSearching(false);
      handleShowAll();
    }
  }, [searchText])

  return (
    <div className='flex items-center gap-2'>
      <input
        type="text"
        placeholder='Search Here!'
        className='border p-1.5 rounded-md'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <IoMdSearch
        className='text-[28px] text-blue-600 cursor-pointer'
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchComp;