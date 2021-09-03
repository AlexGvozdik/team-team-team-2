import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default {
  API_KEY: '4468f2edfc46f46a87b22906b9351926',
  language: 'en-US',
  
  async fetchMovie (query) {
    const  {data} = await axios.get(`search/movie?api_key=${key}&query=${query}&page=1&include_adult=false`);
    return data.results;
  },
  
  async fetchTrandingMovies(page = 1) {
    const { data } = await axios.get(`trending/movie/day?api_key=${this.API_KEY}&language=${this.language}&page=${page}`);
    if (data) {
      return data.results;     
    }
    
  },

  async fetchMovieDetails(movieId) {
    const { data } = await axios.get(`movie/${movieId}?api_key=${key}`);
    return data;
  },

  async fetchMovieCredits(movieId) {
    const { data } = await axios.get(`movie/${movieId}/credits?api_key=${key}`);
    return data.cast;
  };

  async fetchMovieReviews(movieId) {
    const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${key}`);
    return data.results;
  };
}