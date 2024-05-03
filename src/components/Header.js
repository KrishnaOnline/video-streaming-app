import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/menuSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  // const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  let navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    if(searchQuery.length === 0) {
      return;
    }
    navigate(`/search/${encodeURIComponent(searchQuery)}`);
    setSearchQuery("")
  }

  const handleSuggestions = (s) => {
    setSearchQuery(s);
    handleSearchSubmit(s);
  }
  

  async function getSearchResults() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setResults(json[1]);
  };
  
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='sticky max-w-[5000px] top-0 z-50 bg-white'>
      <div className='grid grid-flow-col p-4 px-6 drop-shadow-sm shadow-lg'>
        <div className='flex gap-5 items-center col-span-3'>
          <img alt="menu" className='h-4 cursor-pointer' src={require('../assets/images/three-horizontal-lines.png')}
            onClick={() => handleSideBar()}
          />
          <a href='/'><img alt='logo' className='hidden md:flex h-7 cursor-pointer' src={require('../assets/images/youtube-logo.png')}/></a>
          <a href='/'><img alt='logo' className='md:hidden h-10 -translate-x-4 cursor-pointer' src={require('../assets/images/youtube-logo-mobile.png')}/></a>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSearchSubmit()
        }} className='col-span-8 relative' value={searchQuery}>
          <input className='w-1/2 p-2 border border-black border-opacity-40 rounded-l-full border-r-0' type='text' placeholder='Search'
            onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}
          />
          <button onClick={handleSearchSubmit} className='p-2 border border-black border-opacity-40 bg-gray-100 rounded-r-full px-4'>
            Search
          </button>
          <ul className='absolute bg-white w-1/2 rounded-lg'>
            {
              results.map((s) => (<li key={s} onClick={() => handleSuggestions(s)} className='cursor-pointer hover:bg-gray-50 shadow-sm p-2'>{s}</li>))
            }
          </ul>
        </form>
        <div className='col-span-1'>
          <img alt='user' className='h-10' src={require('../assets/images/user-icon.png')}/>
        </div>
      </div>
      <hr className='shadow-lg'/>
    </div>
  )
}

export default Header;