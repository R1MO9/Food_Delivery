import React from 'react';
import './index.css';
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

const App = () => {
  return (
  <>
    <div>
      <Navbar />
    </div>
    <div className=' max-w-screen-xl mx-auto'>
      {/* Exclusive Deals */}
      <div className='flex overflow-auto no-scrollbar justify-between'>
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 1.png'
        />
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 2.png'
        />
        <Exclusive_Deals 
          img='Images\Exclusive Deals\Deal 3.png'
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
      {/* <div>
        <Footer />
      </div> */}
      
      {/*  */}
      <Features />
    </div>
    </>
  );
}

export default App;
