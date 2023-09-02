import React from 'react'
import SideBar from './SideBar'
import Body from './Body'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='m-6 mx-7'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;