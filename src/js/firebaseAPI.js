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
    async checkWatchedMovies(movie) {
        const response = await axios.get(`https://film-proj-default-rtdb.firebaseio.com/watchedMovies.json`);
        const result = response.data ? Object.values(response.data) : "";
        let include;
        if (result) {
            include = result.find(film => film.id === movie.id)
            return include;
        }
        return include;
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
    async checkQueuedMovies(movie) {
        const { data } = await axios.get(`https://film-proj-default-rtdb.firebaseio.com/queuedMovies.json`);
        const result = data ? Object.values(data) : "";
        let include;
        if (result) {
            include = result.find(film => film.id === movie.id)
            return include;
        }
        return false;
    }
}

