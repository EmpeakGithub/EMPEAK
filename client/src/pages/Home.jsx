import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Logo from '../images/empeak_logo.png';
import Reps from '../images/empeak_reps.png';
import LadyReps from '../images/portrait-female-business-executive-holding.png';
import Timely from '../images/empeaktimely.png';
import Corporate from '../images/empeakcoorpation.png';
import Secured from '../images/empeaksecurely.png';
import applists  from '../components/AvailableApp';
import { NavLink } from 'react-router-dom';
import { IoMdNotifications } from 'react-icons/io';



const Home = () => {

  const [ checked, setChecked ] = useState(false)

  

  return (
    <div>
      <div className='flex items-center justify-between py-3 px-5'>
        <div className='flex font-semibold'>
        {
                applists.map((app, index) => {
                  return (
                    <div key={index} className='my-3'>
                      <NavLink to={`products`} className='mr-4'>
                        {app.name}
                      </NavLink>
                    </div>
                  )
                })
              }
        </div>
        <div>
          < IoMdNotifications />
        </div>
      </div>
      <div className='hero text-white pl-8 md:pl-24 lg:pl-60'>
        <h1 className='text-2xl md:text-2xl lg:text-5xl font-bold'>Empeak</h1>
        <p className='mt-5 text-sm'>Empowering Africa’s Digital Asset and Micro Startup Ecosystem</p>
        
        <section className='flex flex-col lg:flex-row w-[80%] gap-4 '>
          <div className='flex items-center w-full lg:w-[80%] mt-5 rounded-full px-6 py-1 md:py-2 bg-gray-600 placeholder:text-white'>
            < FaSearch className='mr-4' />
            <input 
              type="text"
              className='bg-inherit outline-none w-full placeholder:text-xs md:placeholder:text-base'
              placeholder='Search your digital assets' 
            />
          </div>
          <div className='flex hidden md:block items-center text-yellow-400 w-fit mt-0 md:mt-5 rounded-full cursor-pointer px-6 py-1 md:py-2 bg-gray-600 placeholder:text-white'>
            <p>Sign Up</p>
          </div>
          {/* <button className='bg-yellow-400 rounded-md px-4 py-2 h-auto text-black'>Buy Now</button> */}
        </section>

        <p className='mt-2 md:mt-5 text-xs pl-2'>Trending : Mobil app, web app, arts</p>
        <div className='mt-4 md:mt-10 flex gap-5 font-semibold text-sm'>
          <button className='bg-yellow-400 rounded-md px-4 py-2 text-black cursor-pointer'>Buy Now</button>
          <button className='bg-gray-600 rounded-md px-4 py-2 text-white cursor-pointer'>Sell Now</button>
        </div>
      </div>
      <section className='py-8 '>
        <h3 className='text-center px-2 text-lg lg:text-3xl font-semibold'>
          Empowering Africa’s Digital Asset and Micro <br /> Startup Ecosystem
        </h3>
        <article className='flex flex-col md:flex-row justify-around mt-5'>
          <div className='w-auto md:w-[50%] lg:w-[40%] p-4 lg:ml-20'>
            <div className='h-fit w-auto lg:w-[435px]  overflow-hidden border-2 rounded-b-lg drop-shadow'>
              <img src={Reps} alt="empeak-Team" className='h-64' />
              <div className='flex flex-col-reverse lg:flex-row justify-between items-center p-4'>
                <p className='w-fit rounded-full bg-yellow-400 px-5 py-1 font-semibold cursor-pointer '>Explore</p>
                <p className='w-auto lg:w-[70%] mb-4 text-sm text-justify'>
                  Start your Digital journey with Empeak, a secure and Trust-
                  worthy platform to buy and sell your digital products
                </p>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:w-[50%] lg:w-[60%] p-4 text-sm'>
            <p>Are you ready to revolutionize the way you buy, sell, 
              and invest in digital assets and micro startups? Look 
              no further! Empeak is Africa's first and foremost 
              platform designed exclusively to cater to the needs 
              of this thriving ecosystem
            </p>
            <p className='pt-5'>At Empeak, we believe that Africa's untapped potential 
              lies in its vibrant digital asset market and the rapidly 
              emerging micro startup culture. We aim to empower individuals, 
              entrepreneurs, and investors by providing them with a secure, 
              user-friendly, and dynamic platform to transact and connect.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 '>
              {
                applists.map((app, index) => {
                  return (
                    <div key={index} className='my-3'>
                      <NavLink to={`/products`} className='py-2 px-6 rounded-md bg-gray-600 w-10'>
                        {app.name}
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </article>
      </section>
      <section className='py-8 bg-accentColor2'>
        <h3 className='text-center text-base lg:text-3xl font-semibold'>
          Why Choose Empeak?
        </h3>
        <article className='flex flex-col md:flex-row justify-around mt-5'>
          <div className='w-auto md:w-[50%] lg:w-[40%] p-4 lg:ml-20'>
            <div className='h-fit w-auto lg:w-[435px]  overflow-hidden border-2 rounded-b-lg drop-shadow'>
              <img src={LadyReps} alt="empeak-Team" className='h-60 w-full' />
              <div className='flex flex-col-reverse lg:flex-row justify-between items-center p-4'>
                <p className='w-fit rounded-full bg-empeakYel px-5 py-1 font-semibold cursor-pointer '>Join Empeak</p>
                <p className='w-auto lg:w-[60%] mb-4 text-sm text-justify'>
                  A Click away, Start buying an selling your product to the world.
                </p>
              </div>
            </div>
          </div>
          <div className='md:w-[50%] lg:w-[60%] px-8 text-sm'>
            <ul className='list-disc marker:text-empeakYel marker:text-xl'>
              <li className='text-sm md:text-base text-justify mb-3'>
                <p><span className='font-semibold'>Unleash the Potential:</span> We are passionate about unlocking Africa's digital economy by 
                  providing a platform that fosters growth, collaboration, and 
                  innovation. Empeak serves as the bridge between buyers and 
                  sellers, enabling entrepreneurs to monetize their digital 
                  assets and investors to discover exciting opportunities.
                </p>
              </li>
              <li className='text-sm md:text-base text-justify mb-3'>
                <p><span className='font-semibold'>Secure and Trustworthy:</span> Trust 
                is the foundation of any successful marketplace. Empeak prioritizes the 
                security of your transactions and the protection of your personal 
                information. Our robust verification processes and state-of-the-art 
                encryption ensure that you can buy, sell, or invest with confidence.
                </p>
              </li>
              <li className='text-sm md:text-base text-justify mb-3'>
                <p><span className='font-semibold'>Wide Range of Digital Assets:</span> Whether 
                you're searching for domain names, mobile applications, websites, or social 
                media accounts, Empeak has got you covered. Our extensive marketplace 
                showcases a diverse range of digital assets, allowing you to find the 
                perfect match for your business objectives or investment portfolio.
                </p>
              </li>
              <li className='text-sm md:text-base text-justify mb-3'>
                <p><span className='font-semibold'>Seamless User Experience:</span> Our 
                intuitive and user-friendly interface makes it easy for you to navigate 
                through Empeak's features. From listing your assets to conducting transactions,
                we've streamlined every step to ensure a seamless experience for both buyers 
                and sellers.
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </article>
        <div className='grid lg:grid-cols-3 gap-8 mx-20 mt-8'>
          <article className='h-fit w-72 rounded-2xl shadow-xl bg-white p-2 flex flex-col items-center'>
            <img src={Timely} alt="" className='h-32 '/>
            <h6 className='font-semibold text-base'>Quick Delivery & Payment System</h6>
            <p className='text-sm my-6 text-justify'>We Operate a swift and payment platform with verities of payment methods available</p>
            <p className='py-1.5 px-4 mt-20 mb-4 bg-empeakYel rounded-full w-fit'>Learn More</p>
          </article>
          <article className='h-fit w-72 rounded-2xl shadow-xl bg-white p-2 flex flex-col items-center'>
            <img src={Secured} alt="" className='h-32 '/>
            <h6 className='font-semibold text-base'>Secure & trustworthy</h6>
            <p className='text-sm my-6 text-justify'>We connect buyers and sellers, ensuring both parties achieves quality Goods & Services</p>
            <p className='py-1.5 px-4 mt-20 mb-4 bg-empeakYel rounded-full w-fit'>Learn More</p>
          </article>
          <article className='h-fit w-72 rounded-2xl shadow-xl bg-white p-2 flex flex-col items-center'>
            <img src={Corporate} alt="" className='h-32 '/>
            <h6 className='font-semibold text-base'>Reliable and dependable</h6>
            <p className='text-sm my-6 text-justify'>We are always here for you, buy & sell asessts anytime, anywhere in the world.</p>
            <p className='text-sm text-justify'>Filter and search your desirable digital assets and micro startups.</p>
            <p className='py-1.5 px-4 mt-20 mb-4 bg-empeakYel rounded-full w-fit'>Learn More</p>
          </article>
          
        </div>
      </section>
      <section className='p-10'>
        <div className='flex items-center justify-center'>
          <img src={Logo} alt="empeak-logo" className='h-14' />
          <h4 className='text-lg font-semibold text-empeakYel'>Empeak</h4>
        </div>
        <div className='pt-4 mx-10 lg:mx-52 text-justify'>
          <p>The African digital asset and micro startup landscape is ripe with 
            opportunities, waiting to be explored. Empeak provides the platform to 
            unlock this potential and make your mark in Africa's dynamic economy. 
            So why wait? Join us today, and together, let's redefine the future of 
            commerce and entrepreneurship in Africa.
          </p>
          <div className='flex justify-center my-6'>
            <button className='bg-empeakYel py-1.5 px-5 rounded-full font-semibold'>Join Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home