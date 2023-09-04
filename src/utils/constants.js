const YOUTUBE_API_KEY = "AIzaSyDkg1YC_Cuc7ZYZ_xFOIVnuM5J-dxwN18c";

export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

export const VIDEO_BY_ID_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=`+YOUTUBE_API_KEY;

export const VIDEO_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?key="+YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 150;