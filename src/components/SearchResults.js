import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { SEARCH_RESULTS_API } from '../utils/constants';
import SearchCard from './SearchCard';

const SearchResults = () => {

    const [searchResults, setSearchResults] = useState([]);

    const params = useParams();
    // console.log(params);

    useEffect(() => {
        getSearchResults();
    }, [])
    
    async function getSearchResults() {
        const data = await fetch(SEARCH_RESULTS_API+params.resID);
        const json = await data.json();
        // console.log(json.items);
        setSearchResults(json.items);
    }

  return (
    <div className='m-10 flex flex-col gap-5'>
      {
        searchResults.map((video, index) => {
          return (
            <div key={index} className=''>
              <Link to={"/watch/"+params}>
                <SearchCard key={video?.id?.videoId} searchResults={video}/>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults;