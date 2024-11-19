import React from 'react'
import Image from 'next/image'

interface ServicesCardProps {
    imageSrc: string;
    propClass: string;
  }

const ServicesCard : React.FC<ServicesCardProps> = ({ imageSrc,propClass }) => {
  return (
    <div className="serviceZoomer">
      <div className={`${propClass} bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer `}>
          <div className={` p-6 rounded-full bg-red-200`}>
              <Image src={imageSrc}className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" alt="" height={50} width={50}></Image>
          </div>
          <h1 className=" text-black text-[22px] font-semibold dark:text-white">Sell your home</h1>
          <p className="text-lg text-slate-700 dark:text-white">We sell your home at the best market price</p>
          <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-red-600">READ MORE</button>
      </div>
    </div>
  )
}

export default ServicesCard