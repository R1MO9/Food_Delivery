import React from 'react'

const Features = () => {
  return (
    <div className='m-4'>
        <div className='text-center sm:text-left'>
            <h1 className='font-bold text-2xl'>Know more about us!</h1>
        </div>
        <div>
            <div className='w-full block sm:block lg:hidden p-4'>
                <p className='font-semibold px-6 py-1 w-fit mx-auto text-center rounded-full hover:bg-amber-500 hover:text-white hover:font-bold'>How does Order.UK work?</p>
                <p className='font-semibold px-6 py-1 w-fit mx-auto text-center rounded-full hover:bg-amber-500 hover:text-white hover:font-bold'>What payment methods are accepted?</p>
                <p className='font-semibold px-6 py-1 w-fit mx-auto text-center rounded-full hover:bg-amber-500 hover:text-white hover:font-bold'>Can I track my order in real-time?</p>
                <p className='font-semibold px-6 py-1 w-fit mx-auto text-center rounded-full hover:bg-amber-500 hover:text-white hover:font-bold'>Are there any special discounts or peomotions available?</p>
                <p className='font-semibold px-6 py-1 w-fit mx-auto text-center rounded-full hover:bg-amber-500 hover:text-white hover:font-bold'>Is Order.UK available in my area?</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 bg-slate-950 mx-auto p-4 rounded-xl'>
            <div className='w-fit rounded-xl text-center py-4 sm:py-0 my-auto hidden sm:hidden md:hidden lg:block'>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black hover:font-bold'>How does Order.UK work?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black hover:font-bold'>What payment methods are accepted?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black hover:font-bold'>Can I track my order in real-time?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black hover:font-bold'>Are there any special discounts or peomotions available?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black hover:font-bold'>Is Order.UK available in my area?</p>
            </div>            

            <div className='w-fit bg-gray-300 mx-auto p-4 my-2 rounded-xl text-center hover:scale-105'>
                <p className='font-bold'>Place an Order!</p>
                <img src="Images\Features\Features-2.png" alt="" className='mx-auto' />
                <p>Place order through our </p>
                <p>website or mobile app</p>
            </div>

            <div className='w-fit bg-gray-300 mx-auto p-4 my-2 rounded-xl text-center hover:scale-105'>
                <p className='font-bold'>Track Progress</p>
                <img src="Images\Features\Features-3.png" alt="" className='mx-auto' />
                <p>You can track your order</p>
                <p> status with delivery time</p>
            </div>

            <div className='w-fit bg-gray-300 p-4 mx-auto my-2 rounded-xl text-center hover:scale-105'>
                <p className='font-bold'>Get your Order!</p>
                <img src="Images\Features\Features-1.png" alt="" className='mx-auto' />
                <p>Receive your order at a</p>
                <p> lighting fast speed!</p>
            </div>
        </div>
    </div>
  )
}

export default Features