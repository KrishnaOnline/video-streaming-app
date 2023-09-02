import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isOpen = useSelector(store => store.menu.isOpen);

  if(!isOpen) return null;

  return (
    <div className='flex flex-col gap-2 py-8 pl-20 mr-10'>
      <Link to="/"><p className='font-medium'>Home</p></Link>
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