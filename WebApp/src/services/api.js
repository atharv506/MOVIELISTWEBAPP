const API_KEY = "cc6ba1a95e48255c6224756a073878d8";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
const data = await response.json();
    return data.results;

}


export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`);
const data = await response.json();
    return data.results;
    
}