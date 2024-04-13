import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='m-4 grid grid-cols-1 sm:grid-cols-2 bg-slate-200 sm:px-20 rounded-xl'>
      {/* img */}
      <div className='hidden sm:block'>
        <img src="Images\friends-laughing-using-mobiles 2.png" alt="Order App Banner" className='w-full' />
      </div>
      {/* Text */}
      <div className='my-auto mx-auto sm:order-last'>
        <div className='flex p-4 justify-center'>
          <div className='w-28 sm:36 lg:w-44'>
            <img src="Images/LOGO 1.png" alt="logo" className='' />
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold'>ing is more.</h1>
        </div>

        <p className='md:text-2xl lg:text-4xl font-bold bg-slate-950 text-white w-fit py-3 px-5 lg:px-10 rounded-full mx-auto'>
          <span className='text-amber-500 underline'>Personalised</span> & Instant
        </p>

        <div className='sm:text-center md:text-lg font-medium my-3'>Download the Order.uk app for fast ordering</div>

        <div className='flex justify-center py-3'>
          <button className='mr-1 p-1 bg-black text-white rounded-md transition-transform hover:scale-105'>
            <div className='flex px-1'>
              <div className='my-auto'><FaApple className='text-4xl' /></div>
              <div>
                <p className='text-sm'>Download it on</p>
                <p className='font-bold text-lg'>App Store</p>
              </div>
            </div>
          </button>

          <button className='ml-1 p-1 bg-black text-white rounded-md transition-transform hover:scale-105'>
            <div className='flex px-1'>
              <div className='my-auto'><FaGooglePlay className='text-3xl' /></div>
              <div>
                <p className='text-sm'>Download it on</p>
                <p className='font-bold text-lg'>Google Play</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className='sm:hidden'>
        <img src="Images\friends-laughing-using-mobiles 2.png" alt="Order App Banner" className='w-full' />
      </div>
    </div>
  );
}

export default Banner;
