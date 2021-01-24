import MovieDb from './movie.db.js';
import mongoose from 'mongoose';
import Movie from './models/Movie.js';

mongoose.connect('mongodb://localhost/filmes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));


const movieDb = new MovieDb(Movie)
export default {
	movieDb
}