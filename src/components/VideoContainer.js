import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

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
            <Link to={"/watch/"+video.id}>
              <VideoCard video={video} key={video.id}/>
            </Link>
          ) 
        })
      }
    </div>
  )
}

export default VideoContainer;