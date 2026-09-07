import axios from "axios";
const tmdb_base_url = 'https://api.themoviedb.org/3'
const tmdb_api_key = import.meta.env.VITE_API_KEY

export const MovieApi = axios.create({
    baseURL: tmdb_base_url,
    params: {
        api_key: tmdb_api_key
    }
})
