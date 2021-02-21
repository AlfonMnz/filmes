export default class EpisodeDb {
	constructor(episodeModel) {
		this.episodeModel = episodeModel;
	}

	async addEpisode(episode) {
		try {
			let newEpisodeModel = new this.episodeModel(episode);
			return await newEpisodeModel.save();
		} catch (e) {
			throw e;
		}
	}

	async getEpisodeById(episodeId) {
		try {
			return this.episodeModel.findOne({id: episodeId});
		} catch (e) {
			throw e;
		}
	}
}