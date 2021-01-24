/**
 * Class of the Movie's handler with DB
 * @typedef MovieDb
 */
export default class MovieDb {
	/**
	 * Set the movieModel to property of the class
	 * @constructor
	 * @param {Movie} movieModel The movie Model of mongoose
	 * @property {Movie} movieModel The movie Model of mongoose
	 */
	constructor(movieModel) {
		this.movieModel = movieModel;
	}

	async addMovie(movie) {
		try {
			let newMovieModel = new this.movieModel(movie);
			return await newMovieModel.save();
		} catch (e) {
			console.log(e.message);
			throw new Error("Can't create the movie");
		}

	}

}