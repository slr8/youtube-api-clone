import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'be924ddcf5msh59ccaf6f2973c3ep180311jsnebe79b02d6f2',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
