export default class GetMovieByIdUC {
	constructor(movieDb) {
		this.movieDb = movieDb
	}

	async getMovieById(id) {
		try {
			let movie = await this.movieDb.getMovieById(id);
			return movie;
		} catch (e) {
			throw e;
		}
	}


}