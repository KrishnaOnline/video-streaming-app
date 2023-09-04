import React from 'react'
import { Link } from 'react-router-dom';

const SearchCard = ({searchResults}) => {
    const vidId = searchResults?.id?.videoId;
    const title = searchResults?.snippet?.title;
    const channelTitle = searchResults?.snippet?.channelTitle;
    const desc = searchResults?.snippet?.description;
    const imgUrl = searchResults?.snippet?.thumbnails?.medium?.url;
    console.log(searchResults);

  return (
    <Link to={"/watch/"+vidId}>
          <div className='bg-gray-50 flex border p-2 shadow-md rounded-md w-[70vw]'>
            <img className='rounded-lg shadow-lg' src={imgUrl} alt=''/>
            <div className='pl-5 pt-3 flex flex-col flex-wrap gap-3'>
              <p className='font-semibold'>{title}</p>
              <p className=''>Channel: <span className='font-bold'>{channelTitle}</span></p>
              <p className=''>{desc}</p>
            </div>
          </div>
    </Link>
  )
}

export default SearchCard;