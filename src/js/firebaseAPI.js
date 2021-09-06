import axios from 'axios';
export default {
        
    async addMovieWatched(movieAdded) {
        try {
            await axios.post(`https://film-proj-default-rtdb.firebaseio.com/watchedMovies.json`, movieAdded);
        } catch (error) {
            myError(error)
        }
    },
        async removeMovieWatched (movieId) {
  try {
    await axios.delete(`https://film-proj-default-rtdb.firebaseio.com/watchedMovies/${movieId}.json`);
  } catch (error) {
    myError(error)
  }
},
    async getAllWatchedMovies() {
        try {
        const response = await axios.get(`https://film-proj-default-rtdb.firebaseio.com/watchedMovies.json`);
        return response.data;
        } catch (error) {
        myError('Something went wrong')
        }
    },
    async addMovieQueued(movieAdded) {
        try {
            await axios.post(`https://film-proj-default-rtdb.firebaseio.com/queuedMovies.json`, movieAdded);
        } catch (error) {
            myError(error)
        }
    },
        async removeMovieQueued (movieId) {
  try {
    await axios.delete(`https://film-proj-default-rtdb.firebaseio.com/queuedMovies/${movieId}.json`);
  } catch (error) {
    myError(error)
  }
},
    async getAllQueuedMovies() {
        try {
        const response = await axios.get(`https://film-proj-default-rtdb.firebaseio.com/queuedMovies.json`);
        return response.data;
        } catch (error) {
        myError('Something went wrong')
        }
    },

}

