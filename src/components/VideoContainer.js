import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_URL } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap ml-3'>
      {
        videos.map((video) => {
          return  (
            <VideoCard video={video} key={video.id}/>
          ) 
        })
      }
    </div>
  )
}

export default VideoContainer;