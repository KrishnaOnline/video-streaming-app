import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { VIDEO_BY_ID_URL } from '../utils/constants';
import LiveChat from './LiveChat';
import CommentsSec from './CommentsSec';


const VideoPage = () => {

  const [video, setVideo] = useState([]);

  const title = video?.snippet?.title;
  const channelTitle = video?.snippet?.channelTitle;
  const desc = video?.snippet?.description;

  const params = useParams();
  const videoID = params.id;
  // console.log(videoID);
  // console.log(VIDEO_BY_ID_URL+`&id=${videoID}`);

  const [readMore, setReadMore] = useState(false);

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
    // console.log(vidData);
    setVideo(vidData);
  }

  return (
    <div className='flex flex-wrap'>
      <div className='m-6 ml-16 w-3/5'>
        <iframe className='shadow-lg rounded-lg'
          title='VideoPlayer'
          width="930" 
          height="523" 
          src={"https://www.youtube.com/embed/"+videoID} 
          allowFullScreen>
        </iframe>
        <p className='font-bold text-xl mt-3'>{title}</p>
        <p className='mt-3 font-semibold'>{channelTitle}</p>
        <div className=''>
          <p className='bg-gray-200 rounded-lg p-5 mt-7'>
            {
              readMore ? desc : `${desc?.substring(0, 200)}...`
            }
            <button className='font-medium' onClick={() => toggleReadMore()}>
              {
                readMore ? ` Read Less` : ` Read More`
              }
            </button>
          </p>
          <CommentsSec/>
          {/* <VideoSuggestions/> */}
        </div>
      </div>
      <div className='flex flex-col-reverse mt-6 mr-16 ml-16 border border-black rounded-lg shadow-lg h-[523px] overflow-y-scroll bg-gray-100 w-1/4 p-3'>
        <LiveChat/>
      </div>
    </div>
  )
}

export default VideoPage;