import utils from "../utils/utils";

export default class ViewSerieController {

	constructor(addNewViewSerieUC) {
		this.addNewViewSerieUC = addNewViewSerieUC;

	}

	async addViewSerie(request) {
		try {
			let body = request.body;
			let token = request.req.session.token;
			let viewSerie = await this.addNewViewSerieUC.addViewSerie(body, token);
			return {
				status: 201,
				jsonResponse: {
					message: "View created correctly",
					data: {viewSerie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}

}