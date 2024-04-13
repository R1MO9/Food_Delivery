import React from 'react'
import { useState, useEffect } from 'react'

const Popup = () => {
    const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4000); // Show text after 10 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative text-center z-40">
      <div className='fixed right-5 bottom-5 sm:right-20 sm:bottom-20 hover:scale-110 shadow-2xl rounded-full'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuVDo_ri1llFKJYXquUhaWGLkTGi66gPvtwVwBSHqMQ&s' alt='banner' className='w-20 border-2 border-white m-1 rounded-full shadow-2xl' />
      </div>

      {showText && (
        <div className='fixed right-5 bottom-5 px-24 sm:right-20 sm:bottom-20 py-5'>
          <p className='text-white bg-black p-2 rounded-lg shadow-2xl'>Order Now</p>
        </div>
      )}
    </div>
  )
}

export default Popup