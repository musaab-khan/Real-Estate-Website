'use client'
import React from 'react'
import ServicesCard from './ServicesCard'
import useVisibilityHook from './useVisibilityHook'

const Services = () => {
  const visibleElements=useVisibilityHook('.serviceZoomer',0.735);
  return (
    <div className="light bg-transparent pb-20">
        <section id="services" className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10 dark:bg-gray-800">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} text-red-500 dark:text-white serviceZoomer `}>OUR SERVICES</h1>
                <h1 className={`${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer text-black text-[40px] font-semibold leading-10 dark:text-white `}>Top real estate<br/>services available</h1>
            </div>
            <div id="service-box" className="grid lg:grid-cols-3 lg:w-[100%] lg:m-0 w-[80vw] m-auto grid-cols-1 justify-center items-center gap-8">
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[4]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[5]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[6]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[7]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
            </div>
        </section>
    </div>
  )
}

export default Services