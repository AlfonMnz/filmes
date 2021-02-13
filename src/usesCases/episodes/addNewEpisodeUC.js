export default class AddNewEpisodeUC {

	constructor(episodeDb, episodeEntity) {
		this.episodeDb = episodeDb;
		this.episodeEntity = episodeEntity;

	}

	async addEpisode(episodeData) {
		try {
			let existsEpisode = await this.episodeDb.getEpisodeById(episodeData.id);
			if (existsEpisode) throw new Error('Episode already exists');

			let episode = this.episodeEntity.makeEpisode(episodeData);
			return await this.episodeDb.addEpisode(episode);

		} catch (e) {
			throw e;
		}
	}
}