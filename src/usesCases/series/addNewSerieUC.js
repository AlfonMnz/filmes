export default class AddNewSerieUC {
	constructor(serieDb, serieEntity, seasonDb) {
		this.serieDb = serieDb;
		this.serieEntity = serieEntity;
		this.seasonDb = seasonDb;
	}

	async addSerie(serieData) {
		try {
			let existSerie = await this.serieDb.getSerieById(serieData.id);
			if (existSerie) throw new Error('Serie already exists');

			let serie = this.serieEntity.makeSerie(serieData);

			let seasons = serie.seasons;
			serie.seasons = [];

			for (let season of seasons) {
				let seasonDb = await this.seasonDb.getSeasonById(season.id);
				if (!seasonDb) continue;
				serie.seasons.push(seasonDb._id);
			}

			return await this.serieDb.addSerie(serie);

		} catch (e) {
			throw e;
		}
	}
}