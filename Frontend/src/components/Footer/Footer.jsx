import React from 'react'
import { FaApple, FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex m-4'>
        <div>
            <div className='py-3'>
                <img src="Images\LOGO 1.png" alt="Order.Uk" className='w-64 '/>
            </div>
            <div className='flex py-3'>
                <button className='flex flex-cols bg-black text-white m-1 px-2 rounded-xl'>
                    <div className='text-3xl my-auto'><FaApple /></div>
                    <div className='m-1'>
                        <p className='font-thin text-sm'>Download on the</p>
                        <p className='text-2xl font-bold m-0 p-0'>App Store</p>
                    </div>
                </button>

                <button className='flex flex-cols bg-black text-white m-1 px-2 rounded-xl'>
                    <div className='text-3xl my-auto'><FaGooglePlay /></div>
                    <div className='m-1 text-left'>
                        <p className='font-thin text-sm'>Get it on</p>
                        <p className='text-2xl font-bold'>Play Store</p>
                    </div>
                </button>
            </div>
            <div className='py-3'>
                <p>Company # 490039-445, Registered with</p>
                <p>House of companies.</p>
            </div>
        </div>

        <div className='p-3'>
            <p>Get Exclusive Deals in your Inbox</p>
            <div>
                <div className='flex rounded-xl'>
                    <input type="email" placeholder='youremail@gmail.com' className='p-4'/>
                    <button className='bg-black text-white p-1'>Subscribe</button>
                </div>
                <p>we won't spam, read our <i>email policy</i></p>
            </div>
            <div>
                <div className='flex'>
                </div>
            </div>
        </div>

        <div>
            <div className='p-3'>
                <p className='font-bold py-3'>Order.Uk</p>
                <p className='py-3 underline'>Terms and conditions</p>
                <p className='py-3 underline'>Privacy</p>
                <p className='py-3 underline'>Cookies</p>
                <p className='py-3 underline'>Modren Slavery Statement</p>
            </div>
        </div>

        <div>
            <div className='p-3'>
                <p className='font-bold py-3'>Order.Uk</p>
                <p className='py-3 underline'>Terms and conditions</p>
                <p className='py-3 underline'>Privacy</p>
                <p className='py-3 underline'>Cookies</p>
                <p className='py-3 underline'>Modren Slavery Statement</p>
            </div>
        </div>

    </div>
  )
}

export default Footer