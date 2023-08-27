import React, { useState } from 'react';
import Logo from '../images/empeak_logo.png';
import { FaSearch } from 'react-icons/fa';
import { BsMenuDown } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [showPopUp, setShowPopUp] = useState(false)

  const navigate = useNavigate();

  return (
    <nav className='bg-white h-fit py-2 w-full'>
      <div className='flex items-center px-10 border-b border-black pb-6'>
        <section className='flex items-center w-[60%]'>
          <div onClick={() => navigate('/')}>
            <img src={Logo} alt="empeak-logo" className='h-10 mt-4 text-white cursor-pointer' />
          </div>
          <div className='flex items-center w-full lg:w-[100%] mt-5 rounded-full px-6 py-1 bg-gray-200 placeholder:text-gray-800'>
            <div className='flex items-center'>
              < FaSearch className='mr-4' />
              <input 
                type="text"
                className='bg-inherit outline-none w-fit'
                placeholder='Search your digital assets' 
              />
            </div>
            <div className='border border-l-2 border-black h-5 ml-52 '></div>
            < BsMenuDown className='ml-4' />
          </div>
        </section>
        <section className='grid grid-cols-3 gap-5 w-[15%] ml-10 mt-4 font-semibold'>
          <p>Buy</p>
          <p>Sell</p>
          <p>Explore</p>
        </section>
        <section className='flex w-[15%] ml-10 mt-4 items-center border-l-2 h-5 font-semibold border-black pl-6'>
          <p className='bg-yellow-400 px-6 py-1 rounded-full mr-5 cursor-pointer' onClick={() => navigate('/login')}>Login</p>
          < BiMenu onClick={() => setShowPopUp(!showPopUp)}  className='border cursor-pointer rounded-full p-1 text-3xl' />
        </section>
      </div>
      {
        showPopUp ? 
          <div className='bg-white w-52 p-4 text-center h-fit rounded-md z-10 absolute top-24 right-1'>
            <div className='flex justify-between'>
              <p></p>
              < AiOutlineCloseCircle onClick={() => setShowPopUp(false)} className='text-2xl cursor-pointer' />
            </div>
            <NavLink to='/dashboard/list&sales' onClick={() => setShowPopUp(false)} className='py-4 block'>Dashboard</NavLink>
            <NavLink to='/account' onClick={() => setShowPopUp(false)} className='py-4 block'>Account</NavLink>
            <NavLink to='/about' onClick={() => setShowPopUp(false)} className='py-4 block'>About Us</NavLink>
            <NavLink to='/contact' onClick={() => setShowPopUp(false)} className='py-4 block'>Contact Us</NavLink>
          </div>
        : 
          ''
      }
    </nav>
  )
}

export default Navbar