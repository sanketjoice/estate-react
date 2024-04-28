import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import {RiSearch2Line} from 'react-icons/ri';
import { HouseContext } from './HouseContext';
import { housesData } from '../data';

const Search = () => { 
  const {handleClick} = useContext(HouseContext)
  return (
  <div className="px-[30px] py-6 max-w-[1170px] 
  mx-auto flex flex-col lg:flex-row justify-between 
  gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white
  lg:bg-transparent lg:backdrop-blur rounded-lg lg:mt-[-30px]">
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <button onClick={()=>handleClick()} className="bg-violet-700 w-full lg:max-w-[162px] h-16 text-lg rounded-lg flex items-center justify-center text-white hover:bg-violet-800 transition">
      <RiSearch2Line />
    </button>
  </div>
  )
};

export default Search;
