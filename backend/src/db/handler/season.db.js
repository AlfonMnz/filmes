export default class SeasonDb {
	constructor(seasonModel) {
		this.seasonModel = seasonModel;
	}

	async addSeason(season) {
		try {
			let newSeasonModel = new this.seasonModel(season);
			return await newSeasonModel.save();
		} catch (e) {
			throw e;
		}
	}

	async getSeasonById(seasonId) {
		try {
			return this.seasonModel.findOne({id: seasonId});
		} catch (e) {
			throw e;
		}
	}
}