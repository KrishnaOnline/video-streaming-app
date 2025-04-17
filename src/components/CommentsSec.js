import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

const CommentsSec = () => {

  const [comments, setComments] = useState([]);

  const params = useParams();
  const videoID = params.id;

    useEffect(() => {
        getComments();
    }, [])

    async function getComments() {
        const data = await fetch(YOUTUBE_COMMENTS_API+videoID);
        const json = await data.json();
        setComments(json.items)
        // console.log(json.items);
    }

  return (
    <div className='mt-5 border shadow-md rounded-lg p-3'>
    <p className='font-bold text-2xl mb-3'>Comments :</p>
      {  
        comments?.map((comment) => {
          return (
            <Comments comments={comment}/>
          )
        })
      }
    </div>
  )
}

export default CommentsSec;
