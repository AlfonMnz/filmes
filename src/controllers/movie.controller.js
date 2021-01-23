/**
 * The controller of the movie
 * @typedef MovieController
 */
class MovieController {
	/**
	 *
	 * @constructor
	 * @param {addMovieUC} addMovie The addMovie UC.
	 * @param deleteMovie
	 * @param getMovie
	 */
	constructor({addMovie, deleteMovie, getMovie}) {
		this.addMovieUC = addMovie;
		this.deleteMovieUC = deleteMovie;
		this.getMovieUC = getMovie;
	}

	/**
	 *
	 * @param request
	 * @returns {Promise<{data: {movie: *}, message: string, status: number}>}
	 */
	async addMovie(request) {
		let body = request.params
		let movie = this.addMovieUC.addMovie(body);
		return {
			status: 201,
			message: "Movie created correctly",
			data: {movie}
		}
	}
}

/**
 *
 * @type {MovieController}
 */
module.exports = MovieController;