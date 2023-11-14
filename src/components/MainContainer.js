import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='m-6 mx-7'>
      <div className='hidden md:flex'>
        <ButtonList/>
      </div>
      <div className='mx-auto'>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer;