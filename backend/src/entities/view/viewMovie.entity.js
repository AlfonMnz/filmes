export default class ViewMovieEntity {
	constructor() {
	}

	makeViewMovie(viewMovieData) {
		if (!viewMovieData.hasOwnProperty('id')) throw new Error('Id is required');
		return viewMovieData;
	}
}