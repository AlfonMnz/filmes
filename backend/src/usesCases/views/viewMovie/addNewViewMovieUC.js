export default class AddNewViewMovieUC {
	constructor(viewMovieDb, viewMovieEntity, jwt) {
		this.viewMovieDb = viewMovieDb;
		this.viewMovieEntity = viewMovieEntity;
		this.jwt = jwt
	}

	async addViewMovie(viewMovieData, userToken) {
		try {

			let viewMovie = this.viewMovieEntity.makeViewMovie(viewMovieData);
			let userData = this.jwt.verify(userToken, process.env.JWT || 'jwtSignString');
			viewMovie.user = userData.data._id;

			return await this.viewMovieDb.addViewMovie(viewMovie);
		} catch (e) {
			throw e;
		}
	}
}