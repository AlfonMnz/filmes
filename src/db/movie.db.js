/**
 * Class of the Movie's handler with DB
 * @typedef MovieDb
 */
class MovieDb {
	/**
	 * Set the movieModel to property of the class
	 * @constructor
	 * @param {Movie} movieModel The movie Model of mongoose
	 * @property {Movie} movieModel The movie Model of mongoose
	 */
	constructor({movieModel}) {
		this.movieModel = movieModel;
	}

	async addMovie(movie) {
		try {
			let newMovieModel = new this.movieModel(movie);
			let saveMovie = await newMovieModel.save();
			return saveMovie;
		} catch (e) {
			throw new Error("Can't create the movie");
		}

	}

}

module.exports = MovieDb;