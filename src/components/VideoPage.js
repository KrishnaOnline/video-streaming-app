import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { VIDEO_BY_ID_URL } from '../utils/constants';


const VideoPage = () => {

  const [video, setVideo] = useState([]);

  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const desc = video?.snippet?.description;

  const params = useParams();
  const videoID = params.id;
  // console.log(videoID);
  // console.log(VIDEO_BY_ID_URL+`&id=${videoID}`);

  const [readMore, setReadMore] = useState(true);

  function toggleReadMore() {
    setReadMore(!readMore)
  }
  

  useEffect(() => {
    fetchVideoData();
  }, [])

  async function fetchVideoData() {
    const data = await fetch(VIDEO_BY_ID_URL+`&id=${videoID}`);
    const json = await data.json();
    const vidData = json.items[0];
    console.log(vidData);
    setVideo(vidData);
  }

  return (
    <div className='m-6 ml-16 w-[930px]'>
      <iframe 
        width="930" 
        height="523" 
        src={"https://www.youtube.com/embed/"+videoID} 
        allowFullScreen>
      </iframe>
      <p className='font-bold text-xl mt-3'>{title}</p>
      <p className='mt-3 font-semibold'>{channelTitle}</p>
      <div className=''>
        <pre className='mt-3'>
          {
            readMore ? desc : `${desc.substring(0, 200)}...`
          }
          </pre>
          <button className='font-medium' onClick={() => toggleReadMore()}>
          {
            readMore ? 'Read Less' : 'Read More'
          }
        </button>
      </div>
    </div>
  )
}

export default VideoPage;