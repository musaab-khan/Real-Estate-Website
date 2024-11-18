'use client'
import React from 'react'
import ServicesCard from './ServicesCard'
import visibilityHook from './visibilityHook'

const Services = () => {
  const visibleElements=visibilityHook('.serviceZoomer',0.735);
  return (
    <div className="light bg-transparent pb-20">
        <section id="services" className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} text-red-500 dark:text-red-500 serviceZoomer `}>OUR SERVICES</h1>
                <h1 className={`${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer text-black text-[40px] font-semibold leading-10 dark:text-black `}>Top real estate<br/>services available</h1>
            </div>
            <div id="service-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer`}></ServicesCard>
                <ServicesCard imageSrc='/assets/servicesCard.svg' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'} serviceZoomer`}></ServicesCard>
            </div>
        </section>
    </div>
  )
}

export default Services