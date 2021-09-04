import movieCard from '../templates/movie-card.hbs';
import moviesAPI from '../services/movies-api';

const fn = async () => {
await moviesAPI.fetchMovie(566525).then(console.log)
}

fn()