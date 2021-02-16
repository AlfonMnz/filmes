export default class AddNewViewSerieUC {
	constructor(viewSerieDb, viewSerieEntity, jwt) {
		this.viewSerieDb = viewSerieDb;
		this.viewSerieEntity = viewSerieEntity;
		this.jwt = jwt;
	}

	async addViewSerie(viewSerieData, userToken) {
		try {
			let viewSerie = this.viewSerieEntity.makeViewSerie(viewSerieData);

			let userData = this.jwt.verify(userToken, process.env.JWT || 'jwtSignString');
			viewSerie.user = userData.data._id;

			return await this.viewSerieDb.addViewSerie(viewSerie);
		} catch (e) {
			throw e;
		}
	}

}