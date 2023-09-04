import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center px-1 py-2 shadow-sm w-full'>
        <div>
            <img alt='user' className='h-6' src={require('../assets/images/user-icon.png')}/>
        </div>
        <span className='ml-1 font-semibold'>{name}</span>
        <span className='ml-3 font-normal'>{message}</span>
    </div>
  )
}

export default ChatMessage;