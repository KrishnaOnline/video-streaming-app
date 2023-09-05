import React from 'react';

const VideoCard = ({video}) => {

  // console.log(video);
  const {snippet, statistics} = video;
  const {channelTitle, title, thumbnails} = snippet;
  const {viewCount} = statistics;
  const views = Number(viewCount);

  function formatYouTubeViews(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(2) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(2) + 'K';
    } else {
      return views.toString();
    }
  }

  return (
    <div className='h-72 p-2 m-2 w-[17rem] shadow-lg rounded-lg border border-gray-300 hover:scale-110 ease-in-out duration-700 bg-white'>
      <img className='' alt='thumbnail' src={thumbnails.medium.url}/>
      <p className='font-semibold'>{title.substring(0, 50)+"..."}</p>
      <p className='pt-2'>{channelTitle}</p>
      <p className='pt-2'>{formatYouTubeViews(views)} views •</p>
    </div>
  )
}

export default VideoCard;