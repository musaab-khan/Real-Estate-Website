import React from 'react'
import Card from './Card'

const Properties = () => {
  return (
    <div className="light bg-transparent">
        <section id="properties" className="lg:w-[90%]  m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 data-aos="zoom-in" className="text-red-500 dark:text-red-500 aos-init aos-animate">PROPERTIES</h1>
                <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold dark:text-black aos-init aos-animate">Explore the latest<br/>properties available</h1>
            </div>
            <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                <Card imageSrc='./assets/card.webp'></Card>
                <Card imageSrc='./assets/card2.webp'></Card>
                <Card imageSrc='./assets/card3.webp'></Card>
                <Card imageSrc='./assets/card.webp'></Card>
                <Card imageSrc='./assets/card2.webp'></Card>
                <Card imageSrc='./assets/card3.webp'></Card>
            </div>
            <button className="bg-red-600 text-md m-auto px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">LOAD MORE</button>
        </section>
    </div>
  )
}

export default Properties