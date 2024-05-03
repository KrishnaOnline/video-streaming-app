const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

export const VIDEO_BY_ID_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=`+YOUTUBE_API_KEY;

export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${YOUTUBE_API_KEY}&q=`;

export const YOUTUBE_SEARCH_API = "https://thingproxy.freeboard.io/fetch/"+"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${YOUTUBE_API_KEY}&videoId=`

export const LIVE_CHAT_COUNT = 150;