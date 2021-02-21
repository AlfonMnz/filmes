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

	async getSerieById(serieId, populate = 0) {
		try {
			let query = this.serieModel.findOne({id: serieId});

			populate ? query.populate({
				path: "seasons",
				model: "seasons",
				populate: {
					path: "episodes",
					model: "episode"
				}
			}) : null;

			return await query.exec();
		} catch (e) {
			throw e;
		}
	}
}