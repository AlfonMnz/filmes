import utils from "../utils/utils";

export default class MovieController {

	constructor(addMovieUC, getMovieByIdUC) {
		this.addMovieUC = addMovieUC;
		this.getMovieByIdUC = getMovieByIdUC;
	}

	async addMovie(request) {
		try {
			let body = request.body;
			let movie = await this.addMovieUC.addMovie(body);
			return {
				status: 201,
				jsonResponse: {
					message: "Movie created correctly",
					data: {movie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e);
		}
	}

	async getMovieById(request) {
		try {
			let urlParams = request.params;

			let movie = await this.getMovieByIdUC.getMovieById(urlParams.id);
			return {
				status: 200,
				jsonResponse: {
					message: "Movie found",
					data: {movie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}
}