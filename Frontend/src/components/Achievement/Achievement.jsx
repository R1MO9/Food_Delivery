import React from 'react'

const Achievement = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 bg-amber-500 text-white text-center m-4 rounded-xl p-10 py-7 font-thin'>
        <div className='sm:border-r-2 px-2'> 
            <p className='text-4xl'>546+</p>
            <p className="font-semibold">Registerd Riders</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>

        

        <div className='sm:border-r-2 px-2'>
            <p className='text-4xl'>789,900+</p>
            <p className="font-semibold">Order Delivered</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>

        <div className='sm:border-r-2 px-2'>
            <p className='text-4xl'>690+</p>
            <p className="font-semibold">Restaurant Partners</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>

        <div className='px-2'>
            <p className='text-4xl'>17,457+</p>
            <p className="font-semibold">Food Items</p>
        </div>
    </div>
  )
}

export default Achievement