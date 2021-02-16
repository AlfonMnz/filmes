export default class GetSerieByIdUC {
	constructor(serieDb) {
		this.serieDb = serieDb;
	}

	async getSerieById(id) {
		try {
			let serie = await this.serieDb.getSerieById(id, 1);
			return serie;
		} catch (e) {
			throw e;
		}

	}
}