import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import MainContainer from './MainContainer';
import SideBar from './SideBar';
import VideoPage from './VideoPage'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body;