import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const btnList = ["All", "JavaScript", "MERN", "Development", "DS&Algo", "RamCharan", "Music", "Cricket", "FootBall", "Telugu"];

  return (
    <div className='flex gap-5 pl-6 mb-5 flex-wrap'>
        {
          btnList.map((btn, index) => (
            <Button name={btn} key={index}/>
          ))
        }
    </div>
  )
}

export default ButtonList;