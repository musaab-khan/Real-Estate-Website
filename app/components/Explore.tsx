'use client'
import React from 'react'
import useVisibilityHook from './useVisibilityHook';

const Explore = () => {
    const visibleElements=useVisibilityHook('.exploreZoomer',0.735)

  return (
    <div className="light bg-transparent dark:bg-black" id='explore'>
        <section className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20 dark:bg-gray-800">
            <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                <div className='2xl:flex 2xl:flex-col items-center justify-center'>
                    <h1  className={`text-red-500 dark:text-red exploreZoomer ${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} dark:text-white`}>POPULAR AREAS</h1>
                    <h1 className={`text-black text-[40px] font-semibold leading-10 mt-4 exploreZoomer ${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'} dark:text-white`}>Explore most<br/>popular areas</h1>
                </div>
                <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
                    <div className='exploreZoomer'>
                        <div className={` ${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'} h-[400px] bg-cover bg-center rounded-xl`}style={{ backgroundImage: 'url("/assets/explore-1.jpg")' }}></div>
                    </div>
                    <div className='exploreZoomer'>
                        <div className={` ${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'} h-[400px] bg-cover bg-center rounded-xl`}style={{ backgroundImage: 'url("/assets/explore-1.jpg")' }}></div>
                    </div>
                    <div className='exploreZoomer'>
                        <div className={` ${visibleElements[4]?'animate-zoomIn':'animate-zoomOut'} h-[400px] bg-cover bg-center rounded-xl`}style={{ backgroundImage: 'url("/assets/explore-1.jpg")' }}></div>
                    </div>
                </div>
            </div>
            <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6 relative">
                <div className={`${visibleElements[5]?'translate-y-0':'translate-y-[100%]'} exploreZoomer w-[10vw] ml-[45vw] lg:w-full lg:ml-0 flex justify-center lg:items-center gap-8 transition-all duration-[1s] ease`}>
                    <h1 className="text-black text-7xl font-semibold dark:text-white">5K</h1>
                    <h1 className="text-lg text-gray-600 dark:text-white">ACTIVE <br/>LISTINGS</h1>
                </div>
                <div className={`${visibleElements[6]?'translate-y-0' :'translate-y-[100%]'} exploreZoomer w-[10vw] ml-[45vw] lg:w-full lg:ml-0 flex justify-center lg:items-center gap-8 transition-all duration-[1.5s] ease`}>
                    <h1 className="text-black text-7xl font-semibold dark:text-white">9K</h1>
                    <h1 className="text-lg text-gray-600 dark:text-white">SOLID <br/>LISTINGS</h1>
                </div>
                <div className={`${visibleElements[7]?'translate-y-0':'translate-y-[100%]'} exploreZoomer w-[10vw] ml-[45vw]  lg:w-full lg:ml-0 flex justify-center lg:items-center gap-8 transition-all duration-[2s] ease`}>
                    <h1 className="text-black text-7xl font-semibold dark:text-white">6K</h1>
                    <h1 className="text-lg text-gray-600 dark:text-white">CLIENTS <br/>WE&apos;VE SERVED</h1>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Explore