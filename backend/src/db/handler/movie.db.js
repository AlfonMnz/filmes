
export default class MovieDb {

	constructor(movieModel) {
		this.movieModel = movieModel;
	}

	async addMovie(movie) {
		try {
			let newMovieModel = await new this.movieModel(movie);
			return await newMovieModel.save();
		} catch (e) {
			throw e;
		}

	}

	async getMovieById(movieId) {
		try {
			return this.movieModel.findOne({id: movieId});
		} catch (e) {
			throw e;
		}
	}
}