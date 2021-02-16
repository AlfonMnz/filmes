export default class ViewSerieDb {
	constructor(viewSerieModel) {
		this.viewSerieModel = viewSerieModel;
	}
	async addViewSerie(serie) {
		try {
			let newViewSerieModel = await new this.viewSerieModel(serie);
			return await newViewSerieModel.save();
		} catch (e) {
			throw e;
		}
	}
}