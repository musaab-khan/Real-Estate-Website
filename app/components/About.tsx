'use client';
import useVisibilityHook from './useVisibilityHook';
import React from 'react';
import Image from 'next/image';


const About = () => {
  const visibleElements=useVisibilityHook('.aboutZoomer',0.735);

  return (
    <section id="about" className=" w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
      <div className='aboutZoomer flex-shrink xl:m-auto '>
      <Image layout='intrinsic' width={500} height={600} alt='' src='/assets/About.jpg' className={`rounded-2xl ${visibleElements[0] ? `animate-zoomIn` : 'animate-zoomOut'}`}/>

      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          className={`text-red-500 aboutZoomer ${visibleElements[1] ? 'animate-zoomIn delay-200' : 'animate-zoomOut'} aboutZoomer dark:text-white`}>WHO WE ARE</h1>
        <h1
          className={`${
            visibleElements[2] ? 'animate-zoomIn delay-400' : 'animate-zoomOut'
          } text-black text-[40px] font-semibold leading-10 aboutZoomer dark:text-white`}
        >
          We help clients buy and sell houses since 1989
        </h1>
        <p
          className={`${
            visibleElements[3] ? 'animate-zoomIn delay-600' : 'animate-zoomOut'
          } text-xl text-gray-600 text-justify aboutZoomer dark:text-white`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
          eaque inventore voluptatum rem consectetur quae magni optio quis
          incidunt?
        </p>
        <button
          className={`${
            visibleElements[4] ? 'opacity-100' : 'opacity-0'
          } bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-opacity duration-[1s] ease aboutZoomer`}
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default About;
