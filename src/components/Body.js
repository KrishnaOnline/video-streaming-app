import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
      <div className='relative z-50 bg-white h-screen shadow-lg'>
        <SideBar/>
      </div>
      <div className='absolute'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body;