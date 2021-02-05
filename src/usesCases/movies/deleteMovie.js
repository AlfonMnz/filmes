export default class DeleteMovieUC {
	constructor(movieDb) {
		this.movieDb = movieDb;
	}

	async deleteMovie(movieId) {
		try {
			if (typeof movieId != 'number') throw new Error('Invalid type');
			let movie = await this.movieDb.getMovieById(movieId);
			if (movie) throw new Error('Invalid ID');
			await movie.delete();
			return true;
		} catch (e) {
			throw e;
		}
	}
}