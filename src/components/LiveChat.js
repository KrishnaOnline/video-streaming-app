import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import {generateUsers, generateMessages} from '../utils/utils';

const LiveChat = () => {

  const [liveMsg, setLiveMsg] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const t = setInterval(() => {
      // console.log(1939);
      dispatch(addMessage({
        name: generateUsers(),
        message: "Test Message: " + generateMessages(7) + "🔥",
      }))
    }, 1100);

    return () => clearInterval(t);
  }, [])

  return (
    <div className=''>
      <div className=''>
        {
          chatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message = {c.message}/>
          ))
        }
      </div>
      <form className='flex shadow-lg' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "You",
          message: liveMsg
        }))
        setLiveMsg("")
      }}>
        <input className='border border-black mt-3 p-1 w-3/4' type='text' value={liveMsg} onChange={(e) => setLiveMsg(e.target.value)}/>
        <button className='mt-3 ml-1 border border-black bg-gray-300 w-1/4'>Send</button>
      </form>
    </div>
  )
}

export default LiveChat;