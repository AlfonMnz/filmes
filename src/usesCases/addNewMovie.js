import movieEntity from '../entities/index.js';

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

	/**
	 * create a new Movie in the database
	 * @param {JSON} movieData the data of the movie
	 */
	addMovie(movieData) {
		let movie = this.movieEntity.makeMovie(movieData);
	}
}

export default AddNewMovieUC;