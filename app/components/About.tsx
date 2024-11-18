'use client';

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
        if(index===0){
          console.log(rect.top,":",appearingHeight)
        }
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
    <section
      id="about"
      className="light bg-transparent w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      {/* Image Section */}
      <div className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'}  lg:w-[500px] lg:h-[600px] bg-cover bg-center rounded-xl `}style={{ backgroundImage: 'url("/assets/About.jpg")' }}></div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          className={`text-red-500 zoomer ${
            visibleElements[1] ? 'animate-zoomIn delay-200' : 'animate-zoomOut'
          }`}
        >
          WHO WE ARE
        </h1>
        <h1
          className={`${
            visibleElements[2] ? 'animate-zoomIn delay-400' : 'animate-zoomOut'
          } text-black text-[40px] font-semibold leading-10 zoomer`}
        >
          We help clients buy and sell houses since 1989
        </h1>
        <p
          className={`${
            visibleElements[3] ? 'animate-zoomIn delay-600' : 'animate-zoomOut'
          } text-xl text-gray-600 text-justify zoomer`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
          eaque inventore voluptatum rem consectetur quae magni optio quis
          incidunt?
        </p>
        <button
          className={`${
            visibleElements[3] ? 'opacity-100' : 'opacity-0'
          } bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-opacity duration-[3s] ease zoomer`}
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default About;
