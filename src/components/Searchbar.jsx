import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => (
  <form
    autoComplete="off"
    className="p-2 text-gray-400 focus-within:text-gray-600"
  >
    <label htmlFor="search-field" className="sr-only">Search all songs</label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        autoComplete="off"
        placeholder="Search"
        onChange={() => {}}
        value=""
        name="search-field"
        type="search"
        id="search-field"
      />
    </div>
  </form>
);

export default Searchbar;
