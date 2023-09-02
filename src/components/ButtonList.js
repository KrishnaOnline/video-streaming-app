import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const btnList = ["All", "JavaScript", "Music", "MERN", "Development", "DS & Algo", "Ram Charan", "Cricket", "Foot Ball"];

  return (
    <div className='flex gap-5 mb-9 flex-wrap'>
        {
          btnList.map(btn => (
            <Button name={btn}/>
          ))
        }
    </div>
  )
}

export default ButtonList;