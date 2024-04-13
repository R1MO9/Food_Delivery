import React from 'react';
import { FaApple, FaGooglePlay, FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-slate-200'>
      <div className='container mx-auto py-8 px-4'>

        <div className='flex mx-auto w-fit flex-wrap py-6'>
          <div className="m-3 mx-auto">
            <div className='py-3'>
              <img src="/Images/LOGO 1.png" alt="Order.Uk" className='w-64 mx-auto' />
            </div>
            <div className='flex justify-center py-3'>
              <button className='mr-1 p-1 bg-black text-white rounded-md transition-transform hover:scale-105'>
                <div className='flex px-1'>
                  <div className='my-auto'><FaApple className='text-3xl' /></div>
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
            <div className='py-3 text-center'>
              <p className="">Company # 490039-445, Registered with</p>
              <p className="">House of companies.</p>
            </div>
          </div>

          <div className='m-3'>
            <p className="text-center text-lg font-bold py-5">Get Exclusive Deals in your Inbox</p>
            <div className="flex flex-col items-center">
              <div className='flex bg-slate-300 rounded-full overflow-hidden'>
                <input type="email" placeholder='youremail@gmail.com' className='p-4 outline-none bg-slate-300' />
                <button className='bg-amber-500 text-white p-2 px-6 rounded-full transition-transform hover:scale-105'>Subscribe</button>
              </div>
              <p className="text-sm mt-2">we won't spam, read our <i>email policy</i></p>

              {/* Social Icons */}
              <div className='flex justify-center py-5'>
                <FaFacebook className='text-3xl mx-4 transition-transform hover:scale-105' />
                <FaTwitter className='text-3xl mx-4 transition-transform hover:scale-105' />
                <FaInstagram className='text-3xl mx-4 transition-transform hover:scale-105' />
                <FaSnapchat className='text-3xl mx-4 transition-transform hover:scale-105' />
              </div>
            </div>
          </div>

          <div className="m-3">
            <div className='p-3'>
              <p className='font-bold py-3 text-lg'>Order.Uk</p>
              <p className='py-3 underline'>Terms and conditions</p>
              <p className='py-3 underline'>Privacy</p>
              <p className='py-3 underline'>Cookies</p>
              <p className='py-3 underline'>Modern Slavery Statement</p>
            </div>
          </div>

          <div className='m-3'>
            <div className='p-3'>
              <p className='font-bold py-3 text-lg'>Important Links</p>
              <p className='py-3 underline'>Get help</p>
              <p className='py-3 underline'>Add your restaurant</p>
              <p className='py-3 underline'>Sign up to deliver</p>
              <p className='py-3 underline'>Create an business account</p>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-slate-950 flex justify-between'>
        <p className='text-white text-center py-3 mx-8'>Order.Uk. Copyright© 2021. All Rights Reserved.</p>
        <div className='hidden md:flex md:gap-10 my-auto mx-8'>
            <p  className='text-white'>Privacy Policy</p>
            <p className='text-white'>Terms</p>
            <p className='text-white'>Pricing</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
