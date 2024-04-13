import React from 'react';

const Exclusive_Deals = (props) => {
  return (
    <div className='rounded-xl m-4 shrink-0 relative'>
        {/* Images */}
        <div className='relative'>
            <img src={props.img} alt={props.restaurants} className='sm:w-56 md:w-96 w-40' />
            <div className='absolute top-0 right-10 bg-slate-950 text-white w-fit p-2 rounded-b-lg'>
              <p className='text-md'>{props.discount}</p>
            </div>

            <div className='absolute bottom-0 left-0 text-white p-3'>
              <p className='text-amber-500 font-semibold'>Restaurant</p>
              <p className='font-bold text-xl'>{props.restaurants_name}</p>
            </div>
        </div>
    </div>
  );
};

export default Exclusive_Deals;
