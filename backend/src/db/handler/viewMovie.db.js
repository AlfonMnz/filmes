export default class ViewMovieDb {
	constructor(viewMovieModel) {
		this.viewMovieModel = viewMovieModel;
	}

	async addViewMovie(serie) {
		try {
			let newViewMovieModel = await new this.viewMovieModel(serie);
			return await newViewMovieModel.save();
		} catch (e) {
			throw e;
		}
	}

}