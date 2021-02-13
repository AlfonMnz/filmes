import utils from "../utils/utils";

export default class SeasonController {
	constructor(addNewSeasonUC) {
		this.addNewSeasonUC = addNewSeasonUC
	}

	async addSeason(request) {
		try {
			let body = request.body;
			let season = await this.addNewSeasonUC.addSeason(body, 1);
			return {
				status: 201,
				jsonResponse: {
					message: "Season created correctly",
					data: {season}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e);
		}
	}
}