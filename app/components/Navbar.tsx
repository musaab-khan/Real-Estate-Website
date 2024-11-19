'use client';
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {

    const [menuVisibility, setMenuVisibility]= useState(false);

    function showMenu(){
        setMenuVisibility(!menuVisibility);
    }
  return (
        <nav className="light bg-[#f3f3f3] flex justify-between items-center gap-4 dark:bg-black lg:px-20 px-4 py-3 sticky top-0 z-30">
            <div className="log lg:w-[150px] w-[120px]">
                <Image src='/assets/logo.png' alt="" layout='responsive' width={1} height={1} className="logo dark:invert" />
            </div>
            <ul className={`flex-row justify-between  items-center w-screen h-fit p-5 fixed top-[80px] text-center left-0 bg-slate-800 text-white gap-5 menu lg:flex lg:flex-row lg:p-0 lg:bg-transparent lg:gap-8 lg:w-fit lg:text-black lg:static dark:text-white ${menuVisibility?'':'hidden'}`} id='menu'>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>Home</li>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>About</li>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>Properties</li>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>Services</li>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>Testimonials</li>
                <li className='px-3 py-2 hover:bg-red-600 text-[15px] hover:text-white rounded-md cursor-pointer font-semibold uppercase'>Contact</li>
            </ul>
            <div className='svgs'>
                <svg onClick={showMenu} stroke="#dc2626" fill="#dc2626" strokeWidth="0" viewBox="0 0 448 512" className={`text-black dark:text-white text-2xl cursor-pointer lg:hidden ${menuVisibility?'hidden':''}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                <svg onClick={showMenu} stroke="#dc2626" fill="#dc2626" strokeWidth="0" viewBox="0 0 384 512" className={`text-black dark:text-white text-2xl cursor-pointer ${menuVisibility?'':'hidden'} lg:hidden`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
            </div>
            <div className='flex justify-center  items-center gap-2 lg:gap-8 dark:text-white'>
                <div className="phone flex justify-center items-center  gap-1 lg:gap-3">
                    <svg stroke="#DC2626" fill="#DC2626" strokeWidth="0" viewBox="0 0 512 512" className="size-5 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                    <h1 className='font-semibold lg:text-xl text-sm'>123-456-7890</h1>
                </div>
                <svg stroke="#DC2626" fill="#DC2626" strokeWidth="0" viewBox="0 0 496 512" className="size-6 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
            </div>
        </nav>
  )
}

export default Navbar