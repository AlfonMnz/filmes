import utils from "../utils/utils";

export default class SerieController {
	constructor(addSerieUC) {
		this.addSerieUC = addSerieUC;
	}

	async addSerie(request) {
		try {
			let body = request.body;
			let serie = await this.addSerieUC.addSerie(body);
			return {
				status: 201,
				jsonResponse: {
					message: "Serie created correctly",
					data: {serie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e);
		}
	}
}