/**
 * Class of the Movie's handler with DB
 * @typedef MovieDb
 */
export default class MovieDb {
	/**
	 * Set the movieModel to property of the class
	 * @constructor
	 * @param {MovieModel} movieModel The movie Model of mongoose
	 * @property {MovieModel} movieModel The movie Model of mongoose
	 */
	constructor(movieModel) {
		this.movieModel = movieModel;
	}

	async addMovie(movie) {
		try {
			let newMovieModel = new this.movieModel(movie);
			return await newMovieModel.save();
		} catch (e) {
			throw e;
			//throw new Error("Can't create the movie");
		}

	}

	async getMovieById(movieId) {
		try {
			return this.movieModel.findOne({id: movieId});
		} catch (e) {
			throw e;
			//throw new Error("Can't find the movie")
		}
	}
}