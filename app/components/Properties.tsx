'use client'
import React from 'react'
import PropertiesCard from './PropertiesCard'
import useVisibilityHook from './useVisibilityHook'
const Properties = () => {
  const visibleElements=useVisibilityHook('.propertyZoomer',0.735)

  return (
    <div className="light bg-transparent">
        <section id="properties" className="lg:w-[90%]  m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className={`${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'} propertyZoomer text-red-500 dark:text-white`}>PROPERTIES</h1>
                <h1 className={`${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'} propertyZoomer text-black text-4xl font-semibold dark:text-white`}>Explore the latest<br/>properties available</h1>
            </div>
            <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
               <PropertiesCard imageSrc='./assets/card.webp' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
               <PropertiesCard imageSrc='./assets/card2.webp' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
               <PropertiesCard imageSrc='./assets/card3.webp' propClass={`${visibleElements[4]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
               <PropertiesCard imageSrc='./assets/card.webp' propClass={`${visibleElements[5]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
               <PropertiesCard imageSrc='./assets/card2.webp' propClass={`${visibleElements[6]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
               <PropertiesCard imageSrc='./assets/card3.webp' propClass={`${visibleElements[7]?'animate-zoomIn':'animate-zoomOut'}`}></PropertiesCard>
            </div>
            <button className={`${visibleElements[8]?'animate-zoomIn':'animate-zoomOut'} propertyZoomer bg-red-600 text-md m-auto px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer`}>LOAD MORE</button>
        </section>
    </div>
  )
}

export default Properties