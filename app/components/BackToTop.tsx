'use client'
import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="icon-box"
      onClick={scrollToTop} 
      className={`${
        hasScrolled ? 'translate-y-0' : 'translate-x-[-100%]'
      } bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6 transition-all ease duration-1000`}
    >
      <a>
        <svg
          stroke="white"
          fill="white"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="size-6 text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
        </svg>
      </a>
    </div>
  );
};

export default BackToTop;
