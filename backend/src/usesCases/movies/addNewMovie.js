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
	constructor(movieDb, movieEntity) {
		this.movieEntity = movieEntity;
		this.movieDb = movieDb;
	}

	/**
	 * create a new Movie in the database
	 * @param {JSON} movieData the data of the movie
	 */
	async addMovie(movieData) {
		try {
			let existMovie = await this.movieDb.getMovieById(movieData.id);
			if (existMovie) throw new Error('Movie already exists');
			let movie = this.movieEntity.makeMovie(movieData);
			return await this.movieDb.addMovie(movie);
		} catch (e) {
			throw e;
		}
	}
}