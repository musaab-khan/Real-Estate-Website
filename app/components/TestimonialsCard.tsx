import React from 'react'
import Image from 'next/image'

interface ServicesCardProps {
    imageSrc: string;
     propClass: string;
  }

const TestimonialsCard : React.FC<ServicesCardProps> = ({ imageSrc, propClass }) => {
  return (
    <div className="testimonialZoomer">
      <div className={`${propClass} bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full`}>
          <div className="flex justify-start items-center w-full gap-4">
              <img src={imageSrc} alt="" className="w-[70px] transform hover:scale-105 transition-transform duration-300"/>
              <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold dark:text-white">Albert adame</h1>
                  <h1 className="text-slate-600 dark:text-white">Very well</h1>
              </div>
          </div>
          <p className="text-md text-justify text-slate-600 dark:text-white">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          <div className="flex justify-start items-start gap-2 w-full">
              <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
              <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
              <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
              <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
              <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
          </div>
      </div>
    </div>
  )
}

export default TestimonialsCard