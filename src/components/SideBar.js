import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isOpen = useSelector(store => store.menu.isOpen);

  if(!isOpen) return null;

  return (
    <div className='flex flex-col gap-2 px-12 py-8 w-60 shadow-md'>
      <p className='font-medium'>Home</p>
      <p className='font-medium'>Shorts</p>
      <p className='font-medium'>Subscriptions</p>
      <hr className='my-5'/>
      <p className='font-medium'>Library</p>
      <p className='font-medium'>History</p>
      <p className='font-medium'>Your Videos</p>
      <p className='font-medium'>Watch Later</p>
      <p className='font-medium'>Your Clips</p>
      <hr className='my-5'/>
    </div>
  )
}

export default SideBar;