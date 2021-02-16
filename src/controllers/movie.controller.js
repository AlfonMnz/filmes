import utils from "../utils/utils";

export default class MovieController {

	constructor(addMovieUC) {
		this.addMovieUC = addMovieUC;
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
}