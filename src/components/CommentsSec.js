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
        console.log(json.items);
    }

  return (
    <div className='mt-5'>
        <Comments comments={comments[0]}/>
    </div>
  )
}

export default CommentsSec;