import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import Popular_Categories_Data from './Popular_Categories_Data';
import Popular_Categories from './components/Popular Categories/Popular_Categories'
import Popular_Restaurants from './components/Popular Restaurants/Popular_Restaurants';
import Popular_Restaurants_Data from './Popular_Restaurants_Data';
import Exclusive_Deals from './components/Exclusive Deals/Exclusive_Deals';
import Join_Us from './components/Join Us/Join_Us';
import Navbar from './components/Navbar/Navbar';
import Order_App from './components/Order App/Order_App';
import Achievement from './components/Achievement/Achievement';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Banner from './components/Banner/Banner';
import Popup from './components/Popup/Popup';

const App = () => {

  
  return (
  <>
    <div>
      <Navbar />
    </div>

    {/* test */}
    <Popup />
    


    <div className='max-w-screen-xl mx-auto'>
      {/* Banner */}
      <div>
        <Banner />
      </div>
      {/* Exclusive Deals */}
      <div className='flex overflow-auto no-scrollbar justify-between z-10'>
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 2.png'
          discount='20%'
          restaurants_name='Chef Burgers London'
        />
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 1.png'
          discount='30%'
          restaurants_name='Grand Ai Cafe London'
        />
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 2.png'
          discount='20%'
          restaurants_name='Butterbrot Cafe London'
        />
      </div>


      {/* Popular Categories */}
      <div>
        <div className='m-4'>
          <p className='font-bold'>Order.Uk's Popular Categories</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {Popular_Categories_Data.map((category, index) => (
            <Popular_Categories
              key={index}
              img={category.img}
              item={category.item}
              restaurants={category.restaurants}
            />
          ))}
        </div>
      </div>


      {/* Popular Restaurants */}
      <div>
        <div className='m-4'>
          <p className='font-bold'>Popular Restaurants</p>
        </div>
        <div className='flex overflow-auto no-scrollbar justify-between'>
            {Popular_Restaurants_Data.map((restaurants, index) => (
              <Popular_Restaurants
                key={index}
                img={restaurants.img}
                restaurants={restaurants.restaurants}
                style={{width: 'fit-content'}}
              />
            ))}
        </div>
      </div>

      {/* Order App Banner */}
      <div>
        <Order_App />
      </div>

      {/* Join With Us */}
      <div>

        <div className='m-4'>
          <p className='font-bold'>Join With Us</p>
        </div>
        <Join_Us />
      </div>

      {/* Achivements */}
      {/* <div>
        <Achievement />
      </div> */}

      {/*  */}
      <Features />


    </div>
    {/*  */}
    <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
