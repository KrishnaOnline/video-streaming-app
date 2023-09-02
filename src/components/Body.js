import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import MainContainer from './MainContainer';
import SideBar from './SideBar';

const Body = () => {
  return (
    <div className='m-6 mx-7'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Body;