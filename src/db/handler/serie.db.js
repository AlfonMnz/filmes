export default class SerieDb {
	constructor(serieModel) {
		this.serieModel = serieModel;
	}

	async addSerie(serie) {
		try {

			let newSerieModel = await new this.serieModel(serie);
			return await newSerieModel.save();

		} catch (e) {
			throw e;
		}
	}

	async getSerieById(serieId) {
		try {
			return this.serieModel.findOne({id: serieId});
		} catch (e) {
			throw e;
		}
	}
}