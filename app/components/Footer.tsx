import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="light bg-gray-800 dark:bg-black w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10">
        <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">About Us</h1>
            <p className="text-slate-200 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>
            <div id="social-icons" className="flex justify-start items-center gap-4 mt-4">
                <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                       <Image src="./assets/social.svg" alt="" className="size-5" height={50} width={50}   />
                </div>
                <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <Image src="./assets/social.svg" alt=""   className="size-5" height={50} width={50}   />
                </div>
                <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <Image src="./assets/social.svg" alt=""   className="size-5" height={50} width={50}   />
                </div>
                <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <Image src="./assets/social.svg" alt=""   className="size-5" height={50} width={50}   />
                </div>
            </div>
            <h1 className="text-white mt-8">Copyright Real Estate, All Rights Reserved</h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
            <div className="flex justify-center items-center gap-3">
                    <Image src="/assets/address.svg" alt=""   className="text-white size-5" height={50} width={50}   />
                <p className="text-slate-200">10845 Griffith Peak Dr, Las Vegas, NV 89135</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                    <Image src="/assets/address.svg" alt="" className="text-white size-5" height={50} width={50}   />
                <p className="text-slate-200">+91 879 098 8901</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                    <Image src="/assets/address.svg" alt=""   className="text-white size-5" height={50} width={50}   />
                <p className="text-slate-200">+91 123 678 0912</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                    <Image src="/assets/address.svg" alt=""   className="text-white size-5" height={50} width={50}   />
                <p className="text-slate-200">office23@gmail.com</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
            <div className="flex justify-center items-center gap-4">
            <div className="w-[120px] h-[85px] rounded-lg bg-cover bg-center transform hover:scale-110 cursor-pointer transition-transform duration-300" style={{backgroundImage: 'url("/assets/Contact2.jpg")'}}></div>
                <div>
                    <h1 className="text-lg text-white">Villa with amazing view</h1>
                    <p className="text-slate-400">$ 278.98</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
            <div className="w-[120px] h-[85px] rounded-lg bg-cover bg-center transform hover:scale-110 cursor-pointer transition-transform duration-300" style={{backgroundImage: 'url("/assets/Contact2.jpg")'}}></div>
                <div>
                    <h1 className="text-lg text-white">Sea View Villa</h1>
                    <p className="text-slate-400">$ 789.23</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer