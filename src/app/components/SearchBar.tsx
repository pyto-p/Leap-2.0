import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-8 py-4 gap-8">
      <div className="flex items-center w-full h-auto">
        <FaSearch className="text-primary mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none focus:border-b-2 focus:border-primary px-2 py-1 w-full "
        />
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;


// h-16 p-3 flex-1 text-white bg-tertiary border-b-2 border-secondary focus:outline-none max-sm:w-auto