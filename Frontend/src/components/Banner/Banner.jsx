import React from 'react';
const Banner = () => {
    return(
        <>
        <div className='flex justify-between bg-slate-950 text-white px-10 rounded-lg sm:m-4'>
            <div className='mx-auto my-10 lg:my-auto text-center lg:text-left'>
                <div className='font-bold'>
                    <p className='text-sm'>Order Reastaurant food, takeaway and groceries.</p>
                    <p className='text-4xl'>Feast your senses</p>
                    <p className='text-4xl text-amber-500'>Fast and Fresh</p>
                </div>
                <div className='mt-10'>
                    <p className='text-sm font-semibold my-2'>Enter a postcode to see what we deliver</p>
                    <div className='flex w-fit bg-white text-black rounded-full mx-auto lg:mx-0'>
                        <input type="number" placeholder='e.g. 700110' className='py-2 px-3 rounded-full sm:px-5 font-medium' />
                        <button className='bg-amber-500 rounded-full px-3 sm:px-5'>Search</button>
                    </div>
                </div>
            </div>
            
            <div class="relative hidden lg:block">
                <img src='Images\Untitled-2 1 (2).png' alt='Banner' class='bottom-0' />
            </div>



            <div className='flex-col justify-between hidden lg:flex'>
                <div className='w-72 relative right-28 my-3'>
                    <div className='relative left-56 w-fit'>
                        <img src="Images\1.png" className='' alt="logo" />
                    </div>
                    <div className='bg-white text-black p-2 rounded-lg'>
                        <div className='flex justify-between'>
                            <img src="Images\LOGO 1.png" className='w-24' alt="logo" />
                            <p>now</p>
                        </div>
                        <div className='w-full'>
                            <p className='font-bold'>We have received your order!</p>
                            <p className=''>Awating Reastaurant acceptence</p>
                        </div>
                    </div>
                </div>

                <div className='w-72 relative my-3'>
                    <div className='relative left-56 w-fit'>
                        <img src="Images\2.png" className='' alt="logo" />
                    </div>
                    <div className='bg-white text-black p-2 rounded-lg'>
                        <div className='flex justify-between'>
                            <img src="Images\LOGO 1.png" className='w-24' alt="logo" />
                            <p>now</p>
                        </div>
                        <div className='w-full'>
                            <p className='font-bold'>We have received your order!</p>
                            <p className=''>Awating Reastaurant acceptence</p>
                        </div>
                    </div>
                </div>

                <div className='w-72 relative right-28 my-3'>
                    <div className='relative left-56 w-fit'>
                        <img src="Images\3.png" className='' alt="logo" />
                    </div>
                    <div className='bg-white text-black p-2 rounded-lg'>
                        <div className='flex justify-between'>
                            <img src="Images\LOGO 1.png" className='w-24' alt="logo" />
                            <p>now</p>
                        </div>
                        <div className='w-full'>
                            <p className='font-bold'>We have received your order!</p>
                            <p className=''>Awating Reastaurant acceptence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner;