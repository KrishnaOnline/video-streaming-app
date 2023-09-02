import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/menuSlice';

const Header = () => {
  
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-4 px-6 drop-shadow-lg shadow-lg sticky top-0 bg-white'>
      <div className='flex gap-5 items-center col-span-3'>
        <img alt="menu" className='h-4 cursor-pointer' src={require('../assets/images/three-horizontal-lines.png')}
          onClick={() => handleSideBar()}
        />
        <img alt='logo' className='h-7' src={require('../assets/images/youtube-logo.png')}/>
      </div>
      <div className='col-span-8'>
        <input className='w-1/2 p-2 border border-black border-opacity-40 rounded-l-full border-r-0' type='text' placeholder='Search'/>
        <button className='p-2 border border-black border-opacity-40 bg-gray-100 rounded-r-full px-4'>
          Search
        </button>
      </div>
      <div className='col-span-1'>
        <img alt='user' className='h-10' src={require('../assets/images/user-icon.png')}/>
      </div>
    </div>
  )
}

export default Header;