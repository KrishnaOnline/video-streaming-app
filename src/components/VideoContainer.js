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
    // console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className='flex items-center max-w-[1280px] justify-center gap-2 mx-auto flex-wrap'>
      {
        videos.map((video) => {
          return  (
            <Link to={"/watch/"+video.id} key={video.id}>
              <div className=''>
                <VideoCard key={video.id} video={video}/>
              </div>
            </Link>
          ) 
        })
      }
    </div>
  )
}

export default VideoContainer;