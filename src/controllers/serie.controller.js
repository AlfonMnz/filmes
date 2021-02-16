import utils from "../utils/utils";

export default class SerieController {
	constructor(addSerieUC, getSerieByIdUC) {
		this.addSerieUC = addSerieUC;
		this.getSerieByIdUC = getSerieByIdUC;
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

	async getSerieById(request) {
		try {
			let urlParams = request.params
			let serie = await this.getSerieByIdUC.getSerieById(urlParams.id);
			return {
				status: 200,
				jsonResponse: {
					message: "Serie found",
					data: {serie}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}
}