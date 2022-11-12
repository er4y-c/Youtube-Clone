import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'b0dbab0c2emsh984d5b6276e1902p1811b4jsn09b3c17cdbc9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchData = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
} 