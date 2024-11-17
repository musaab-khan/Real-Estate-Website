'use client'
import React,{useState,useEffect} from 'react'

const Searcher = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const element = document.getElementById("searchProperty");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className={`light bg-transparent z-10 ${
          isVisible ? "animate-zoomIn" : "animate-zoomOut"
        }`} id='searchProperty'>
        <div data-aos="zoom-in" id="form" className="light bg-white lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 aos-init aos-animate">
            <div className="w-full">
                <h1 className="text-black font-semibold dark:text-black">LOCATION</h1>
                <input type="text" placeholder="Enter an address, state, city or pincode" className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"/>
            </div>
            <div className="w-full">
                <h1 className="text-black dark:text-black font-semibold">TYPE</h1>
                <select id="selectOption" name="selectOption" className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
                    <option value="">Select Property</option>
                    <option value="option1">Rentals</option>
                    <option value="option2">Sales</option>
                    <option value="option3">Commercial</option>
                </select>
            </div>
            <div className="w-full">
                <h1 className="text-black dark:text-black font-semibold">CATEGORY</h1>
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