import utils from "../utils/utils";

export default class ViewMovieController {
	constructor(addNewViewMovieUC) {
		this.addNewViewMovieUC = addNewViewMovieUC;
	}

	async addViewMovie(request) {
		try {

			let body = request.body;
			let token = request.req.session.token;
			let viewMovie = await this.addNewViewMovieUC.addViewMovie(body, token);
			return {
				status: 201,
				jsonResponse: {
					message: "View created correctly",
					data: {viewMovie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}
}