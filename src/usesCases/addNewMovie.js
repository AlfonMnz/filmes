import {movieEntity} from '../entities/index';

/**
 * The Use Case of add new movie
 * @typedef AddNewMovieUC
 */
class AddNewMovieUC {
	/**
	 * Constructor of the class
	 * @constructor
	 * @property {MovieEntity} movieEntity The movie entity
	 */
	constructor() {
		this.movieEntity = movieEntity;
	}


	addMovie(movieData) {
		let movie = this.movieEntity.makeMovie(movieData);
	}
}

module.exports = AddNewMovieUC;