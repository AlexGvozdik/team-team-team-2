import axios from "axios";
import myError from '../js/customAlert';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default {
  API_KEY: '4468f2edfc46f46a87b22906b9351926',
  language: 'en-US',
  
  async fetchMovie (query, page=1) {
    const response = await axios.get(`search/movie?api_key=${this.API_KEY}&query=${query}&page=${page}&include_adult=false`);
    if (response.status !== 200 || response.data.results.length === 0) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
    }
    return await response.data;
  },
  
  async fetchTrandingMovies(page = 1) {
    const response = await axios.get(`trending/movie/day?api_key=${this.API_KEY}&language=${this.language}&page=${page}`);
    if (response.status !== 200 || response.data.results.length === 0) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
    }
    return await response.data;
    
  },

  async fetchMovieDetails(movieId) {
    const response = await axios.get(`movie/${movieId}?api_key=${key}`);
    if (response.status !== 200) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
     }
     return await response.data
  },

  async fetchMovieCredits(movieId) {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${key}`);
    if (response.status !== 200) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
     }
     return await response.data
  },

  async fetchMovieReviews(movieId) {
    const response= await axios.get(`movie/${movieId}/reviews?api_key=${key}`);
    if (response.status !== 200) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
     }
     return await response.data
  },

   async getGenres() {
    const response = await axios.get(`genre/movie/list?api_key=${this.API_KEY}&language=${this.language}`);

    if (response.status !== 200) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
     }
     return await response.data
  },
   
  async getTrailers(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}&language=${this.language}`);

    if (response.status !== 200) {
      myError('Unsuccessful results.Try again!')
      throw new Error('Something went wrong')
      return false
     }
     return await response.data
  },
}