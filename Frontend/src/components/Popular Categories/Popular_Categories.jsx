import React from 'react'
const Popular_Categories = (props) => {
  return (
    <div className='rounded-xl bg-slate-950 w-fit m-4'>
        {/* Images */}
        <div>
            <img src={props.img} alt={props.item} className='w-44' />
        </div>
        {/* Text */}
        <div className='px-3 py-2'>
            <p className='font-bold text-sm text-yellow-600'>{props.item}</p>
            <p className='text-white'>{props.restaurants}</p>
        </div>
    </div>
  )
}

export default Popular_Categories