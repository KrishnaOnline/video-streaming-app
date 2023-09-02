import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-1 px-4 rounded-lg bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button