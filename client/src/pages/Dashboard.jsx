import React from 'react';
import User from '../images/user1.jpg'
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

  const lists = [
    {
      name: 'List & Sales',
      path: 'list&sales'
    },
    {
      name: 'Purchases',
      path: 'purchases'
    },
    {
      name: 'Payment & Invoices',
      path: 'payment&invioce'
    },
    {
      name: 'Sales Analytics',
      path: 'salesanalytics'
    },
    {
      name: 'Payment & Wallet',
      path: 'paymentwallet'
    },
  ]



  return (
    <div className='flex'>
      <section className='w-[30%] flex flex-col items-center'>
        <div className='border-b-4 border-empeakYel w-fit py-4 flex flex-col items-center'>
          <h3 className='text-3xl font-bold'>Dashboard</h3>
          <img src={User} alt="user-img" className='h-[200px] w-48 rounded-[100%] my-3 ' />
          <p className='text-xl font-bold'>Sandra Clinton</p>
          <p className='text-sm font-light'>example@gmail.com</p>
        </div>
        <div className=''>
          {
            lists.map((list, index) => {
              return (
                <NavLink 
                  key={index} 
                  to={list.path} 
                  className='block mt-4 w-full px-4 py-1.5 font-semibold rounded-lg'
                >
                  {list.name}
                </NavLink>
              )
            })
          }
        </div>
      </section>

      <section className='w-[80%]'>
        < Outlet />
      </section>
      
    </div>
  )
}

export default Dashboard