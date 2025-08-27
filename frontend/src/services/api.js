const API_KEY = "1bed8d281e81e25cf67fc80ac9c4f3e2"
const BASE_URL = "https://api.themoviedb.org/3"
// Movies section
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const getUpcomingMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const getNowPlayingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
export const getTopRatedMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Tv section

export const searchTv = async (query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
export const getPopularTv = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const getAiringTodayTv = async () => {
    const response = await fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const getOntheairTv = async () => {
    const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
export const getTopRatedTv = async () => {
  const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
