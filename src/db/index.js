import MovieDb from "./movie.db.js";
//import {movieEntity} from '../entities/index.js';
import MovieModel from './models/Movie.js';
import mongoose from 'mongoose';

const movieDb = new MovieDb(MovieModel);

mongoose.connect(process.env.MONGOSTRING || 'mongodb://localhost/movieRewind', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));

export {movieDb}
