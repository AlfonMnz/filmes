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
	constructor(addMovie) {
		this.addMovieUC = addMovie;
		//this.test = "This is a test";
		/*this.deleteMovieUC = deleteMovie;
		this.getMovieUC = getMovie;*/
	}

	/**
	 *
	 * @param request
	 * @returns {Promise<{data: {movie: *}, message: string, status: number}>}
	 */
	async addMovie(request) {
		try {
			let body = request.params
			let movie = this.addMovieUC.addMovie(body);
			return {
				status: 201,
				message: "Movie created correctly",
				data: {movie}
			}
		} catch {
			return {
				status: 500,
				message: "Something went wrong"
			}
		}

	}
}

export default MovieController;