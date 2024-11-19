'use client';
import React from 'react'
import Image from 'next/image'

interface PropertiesCardProps {
    imageSrc: string;
    propClass: string
  }

const PropertiesCard: React.FC<PropertiesCardProps> = ({ imageSrc,propClass }) => {
  return (
    <div className="propertyZoomer">
    <div className={`bg-white dark:bg-gray-800 rounded-xl w-full ${propClass} `}>
        <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${imageSrc})` }}>
            <div id="top" className="flex justify-between items-end w-full">
                <div>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">Featured</button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">Sales</button>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">active</button>
                </div>
            </div>
            <div id="bottom" className="flex justify-between items-end w-full">
                <div className="flex justify-start items-center gap-2">
                    <Image width={50} height={50}src='./assets/location-pin.svg' className="size-4 text-white" alt=""></Image>
                    <h1 className="text-white">6Downtown, Las Vegas</h1>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Image width={50} height={50}src='./assets/video.svg' className="size-4 text-white" alt=""></Image>
                    <Image width={50} height={50}src='./assets/photo.svg' className="size-4 text-white" alt=""></Image>
                </div></div>
            </div>
            <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-xl text-black font-semibold dark:text-white">Villa with Amazing View</h1>
                <h1 className="text-2xl text-red-600 font-bold dark:text-white">$ 213.23</h1>
                <p className="dark:text-white">Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
                <div id="icons" className="flex justify-center items-start gap-4">
                    <div className="flex justify-center items-center gap-2">
                        <Image width={50} height={50}src='./assets/bath.svg' className="size-4 text-white" alt=""></Image>
                        <h1 className="dark:text-white">3</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Image width={50} height={50}src='./assets/bed.svg' className="size-4 text-white" alt=""></Image>
                        <h1 className="dark:text-white">4</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Image width={50} height={50}src='./assets/area.svg' className="size-4 text-white" alt=""></Image>
                        <h1 className="dark:text-white">250 sq ft</h1>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-8"></div>
                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                    <div className="flex justify-center items-center gap-2">
                        <Image width={50} height={50}src='./assets/profile.svg' className="size-4 text-white" alt=""></Image>
                        <h1 className="dark:text-white">Alice adams</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                            <Image width={50} height={50}src='./assets/share.svg' className="size-4 text-white" alt=""></Image>
                        </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <Image width={50} height={50}src='./assets/like.svg' className="size-4 text-white" alt=""></Image>
                    </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <Image width={50} height={50}src='./assets/plus.svg' className="size-4 text-white" alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PropertiesCard