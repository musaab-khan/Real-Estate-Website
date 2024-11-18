import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return (
    <div className="light bg-transparent">
        <section id="testimonials" className="light bg-transparent lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1  className="text-red-500 dark:text-white">OUR CLIENTS</h1>
                <h1  className="text-black dark:text-white text-[40px] font-semibold leading-10">What are our clients <br/>saying about us</h1>
            </div>
            <div id="clients-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
                <TestimonialsCard imageSrc='/assets/test1.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test2.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test2.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test1.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/test2.png'></TestimonialsCard>
            </div>
        </section>
    </div>
  )
}

export default Testimonials