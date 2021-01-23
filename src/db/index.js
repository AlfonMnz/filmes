import MovieDb from 'movie.db';
import mongoose from 'mongoose';
import Movie from './models/Movie';

mongoose.connect('mongodb://localhost/filmes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));


const movieDb = new MovieDb({Movie})
module.export = {
	movieDb
}