import {movieEntity} from '../../entities/index.js';
import {movieDb} from '../../db/index.js';
/**
 * The Use Case of add new movie
 * @typedef AddNewMovieUC
 */
export default class AddNewMovieUC {
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
	async addMovie(movieData) {
		try {
			let movie = this.movieEntity.makeMovie(movieData);
			await movieDb.addMovie(movie);
		} catch (e) {
			throw e;
		}
	}
}