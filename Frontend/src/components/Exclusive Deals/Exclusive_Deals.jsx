import React from 'react'

const Exclusive_Deals = (props) => {
  return (
    <div className='rounded-xl m-4 shrink-0 w'>
        {/* Images */}
        <div className=''>
            <img src={props.img} alt={props.restaurants} className='sm:w-56 md:w-96 w-40' />
        </div>
    </div>
  )
}

export default Exclusive_Deals