const API_KEY = "1bed8d281e81e25cf67fc80ac9c4f3e2";
const BASE_URL = "https://api.themoviedb.org/3";

// ---------------- Movies ----------------

// Search Movies (with pagination)
export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await response.json();
  return data.results;
};

// Popular
export const getPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Upcoming
export const getUpcomingMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Now Playing
export const getNowPlayingMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Top Rated
export const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Movie Details (single movie)
export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

// ---------------- TV Shows ----------------

// Search TV (with pagination)
export const searchTv = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await response.json();
  return data.results;
};

// Popular TV
export const getPopularTv = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Airing Today
export const getAiringTodayTv = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// On The Air
export const getOntheairTv = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};

// Top Rated TV
export const getTopRatedTv = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};
