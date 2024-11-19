'use client'
import React from 'react'
import useVisibilityHook from './useVisibilityHook';

const Searcher = () => {
  const visibleElements=useVisibilityHook('#form',0.735);

  return (
    <div className={`light bg-transparent z-10 dark:bg-black `} id='searchProperty'>
        <div id="form" className={`light bg-white lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 ${visibleElements[0] ? "animate-zoomIn" : "animate-zoomOut"} dark:bg-gray-800`}>
            <div className="w-full">
                <h1 className="text-black font-semibold dark:text-white">LOCATION</h1>
                <input type="text" placeholder="Enter an address, state, city or pincode" className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"/>
            </div>
            <div className="w-full">
                <h1 className="text-black dark:text-white font-semibold">TYPE</h1>
                <select id="selectOption" name="selectOption" className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
                    <option value="">Select Property</option>
                    <option value="option1">Rentals</option>
                    <option value="option2">Sales</option>
                    <option value="option3">Commercial</option>
                </select>
            </div>
            <div className="w-full">
                <h1 className="text-black dark:text-white font-semibold">CATEGORY</h1>
                <select id="selectOption" name="selectOption" className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
                    <option value="">Property Category</option>
                    <option value="option1">Apartment</option>
                    <option value="option2">Duplex</option>
                    <option value="option3">Condos</option>
                    <option value="option3">Houses</option>
                    <option value="option3">Villas</option>
                </select>
            </div>
            <div className="w-full">
                <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300">SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Searcher