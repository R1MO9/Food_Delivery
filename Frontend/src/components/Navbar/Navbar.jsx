import React from 'react'
import { useState } from 'react';
const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    <nav className='flex justify-between px-8 items-center h-16 font-mono' role='navigation'>
        {/* Logo */}
        <a href='/' className='w-40 sm:w-40 md:w-52'><img src="Images\LOGO 1.png" /></a>

        {/* Collapse Button */}
        <div className='px-4 cursor-pointer xl:hidden' onClick={toggleCollapse}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
        </div>

        {/* Nav Items */}
        <div className='xl:block hidden'>
            <a href='/' className='p-4'>Home</a>
            <a href='/' className='p-4'>Browse Menu</a>
            <a href='/' className='p-4'>Special Offers</a>
            <a href='/' className='p-4'>Restaurants</a>
            <a href='/' className='p-4'>Track Order</a>
        </div>

        {!isCollapsed && (
        <div className='fixed top-0 right-0 h-full bg-slate-300'>
            <div className ='text-xl font-semibold py-4 m-2'>
                <div className="flex justify-end">
                    <button onClick={toggleCollapse} className="focus:outline-none">
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                </div>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Pizza</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Garlic Bread</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Calzone</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Kababs</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Salads</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Cold Drinks</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Happy Meal</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Desserts</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Hot Drinks</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Sauces</a>
                <a href='/' className='block py-2 px-10 rounded-lg hover:bg-slate-950 hover:text-white'>Orbit</a>
            </div>
        </div>
        )}


        {/* Login/Signup */}
        <div className='xl:block hidden'>
            <button className='bg-slate-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-3xl'>Login/Signup</button>
        </div>
    </nav>
  )
}

export default Navbar