'use client';
import visibilityHook from './visibilityHook';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const About = () => {
  const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});

  const handleScroll = () => {
    const zoomers = document.querySelectorAll('.zoomer');
    const newVisibilityState: Record<string, boolean> = {};

    zoomers.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const appearingHeight = window.innerHeight * 0.9;

        newVisibilityState[index] = (rect.top <= appearingHeight);
      }
    });

    setVisibleElements(newVisibilityState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="dark bg-black w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
      <div className={`${visibleElements[0]?'animate-zoomIn':''} w-90 h-[110vh]  lg:w-[500px] lg:h-[600px] bg-cover bg-center rounded-xl `}style={{ backgroundImage: 'url("/assets/About.jpg")' }}></div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          className={`text-red-500 zoomer ${visibleElements[0] ? 'animate-zoomIn delay-200' : 'animate-zoomOut'} zoomer dark:text-white`}>WHO WE ARE</h1>
        <h1
          className={`${
            visibleElements[1] ? 'animate-zoomIn delay-400' : 'animate-zoomOut'
          } text-black text-[40px] font-semibold leading-10 zoomer dark:text-white`}
        >
          We help clients buy and sell houses since 1989
        </h1>
        <p
          className={`${
            visibleElements[2] ? 'animate-zoomIn delay-600' : 'animate-zoomOut'
          } text-xl text-gray-600 text-justify zoomer dark:text-white`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
          eaque inventore voluptatum rem consectetur quae magni optio quis
          incidunt?
        </p>
        <button
          className={`${
            visibleElements[3] ? 'opacity-100' : 'opacity-0'
          } bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-opacity duration-[1s] ease zoomer`}
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default About;
