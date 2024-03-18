import React from 'react'

const Join_Us = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 m-4'>
  {/* Partner With Us */}
  <div className="relative">
    <img className="w-full rounded-xl" src="Images/Group 8 (1).png" alt="Overlay" />

    <div className="absolute top-0 left-4 bg-white p-3 rounded-b-lg font-bold text-xs lg:left-10 lg:text-lg flex items-center">
      <p>Earn more with low fees</p>
    </div>

    <div className="absolute bottom-2 lg:left-10 lg:bottom-10 p-4 flex flex-col items-start">
      <div className='py-4'>
        <p className="text-amber-500 text-xs font-semibold sm:text-lg">Signup as a business</p>
        <p className="text-2xl font-bold text-white sm:text-3xl">Partner with us</p>
      </div>
      <button className="bg-amber-500 text-white px-6 py-1 rounded-full font-semibold hover:bg-amber-600">Get started</button>
    </div>
  </div>

  {/* Ride With Us */}
  <div className="relative">
    <img className="w-full rounded-xl" src="Images/Group 8.png" alt="Overlay" />

    <div className="absolute top-0 left-4 bg-white p-3 rounded-b-lg font-bold text-xs lg:left-10 lg:text-lg flex items-center">
      <p>Avail exclusive perks</p>
    </div>

    <div className="absolute bottom-2 lg:left-10 lg:bottom-10 p-4 flex flex-col items-start">
      <div className='py-4'>
        <p className="text-amber-500 text-xs font-semibold sm:text-lg">Signup as a rider</p>
        <p className="text-2xl font-bold text-white sm:text-3xl">Ride with us</p>
      </div>
      <button className="bg-amber-500 text-white px-6 py-1 rounded-full font-semibold hover:bg-amber-600">Get started</button>
    </div>
  </div>
</div>

  )
}

export default Join_Us