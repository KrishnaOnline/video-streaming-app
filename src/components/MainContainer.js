import React from 'react'
import SideBar from './SideBar'
import Body from './Body'

const MainContainer = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <Body/>
    </div>
  )
}

export default MainContainer;