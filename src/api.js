import axios from "axios";
const tmdb_base_url = 'https://api.themoviedb.org/3/search'
const tmdb_api_key = import.meta.env.VITE_API_ACCESS_TOKEN

export const MovieApi = axios.create({
    baseURL: tmdb_base_url,
    params: {
        api_key: tmdb_api_key
    }
})
