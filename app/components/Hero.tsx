import React from 'react';

const Hero = () => {

  return (
    <div className="w-100 light dark:bg-black">
      <section
      id="home"
      className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
      style={{
        backgroundImage: 'url("/assets/hero-bg.webp")',
      }}
    >
      <h1
        className={`text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] animate-fadeInScale`}>
        Find your next Home in Las Vegas
      </h1>
      <p
        className={`text-white text-xl lg:pr-[500px] pr-0 animate-fadeInScale`}
      >
        Through our proprietary platform, WpResidence is changing how agents
        and clients navigate the process of finding or selling a home.
      </p>
    </section>
    </div>
  );
};

export default Hero;
