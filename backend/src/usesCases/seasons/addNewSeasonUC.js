export default class AddNewSeasonUC {
	constructor(seasonDb, seasonEntity, addNewEpisodeUC) {
		this.seasonDb = seasonDb;
		this.seasonEntity = seasonEntity;
		this.addNewEpisodeUC = addNewEpisodeUC
	}

	async addSeason(seasonData, insertEpisodes = 0) {
		try {
			let existSeason = await this.seasonDb.getSeasonById(seasonData.id);
			if (existSeason) throw new Error('Season already exists');

			let season = this.seasonEntity.makeSeason(seasonData);

			if (insertEpisodes === 1) {
				let episodes = season.episodes;
				season.episodes = [];
				for (let episode of episodes) {
					if (episode.name === undefined) continue;
					let episodeDb = await this.addNewEpisodeUC.addEpisode(episode);
					season.episodes.push(episodeDb._id);
				}
			}

			return await this.seasonDb.addSeason(season);
		} catch (e) {
			throw e;
		}
	}
}