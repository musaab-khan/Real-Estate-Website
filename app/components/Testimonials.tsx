'use client'
import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import useVisibilityHook from './useVisibilityHook'

const Testimonials = () => {
  const visibleElements=useVisibilityHook('.testimonialZoomer',0.735);
  return (

    <div className="light bg-transparent">
        <section id="testimonials" className="light bg-transparent lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1  className={`text-red-500 dark:text-white testimonialZoomer ${visibleElements[0]?'animate-zoomIn':'animate-zoomOut'}` }>OUR CLIENTS</h1>
                <h1  className={`text-black dark:text-white text-[40px] font-semibold leading-10 testimonialZoomer ${visibleElements[1]?'animate-zoomIn':'animate-zoomOut'}`}>What are our clients <br/>saying about us</h1>
            </div>
            <div id="clients-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[2]?'animate-zoomIn':'animate-zoomOut'}`}></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[3]?'animate-zoomIn':'animate-zoomOut'}`}></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[4]?'animate-zoomIn':'animate-zoomOut'}`}></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[5]?'animate-zoomIn':'animate-zoomOut'}`}></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[6]?'animate-zoomIn':'animate-zoomOut'} `}></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png' propClass={`${visibleElements[7]?'animate-zoomIn':'animate-zoomOut'} `}></TestimonialsCard>
            </div>
        </section>
    </div>
  )
}

export default Testimonials