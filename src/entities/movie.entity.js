/**
 * Entity of a movie
 * @typedef MovieEntity
 */
class MovieEntity {
	/**
	 * The constructor of the class
	 * @constructor
	 */
	constructor() {
	}

	/**
	 * Function to make a Movie entity, first validate if have all requireds params then return an error if some param
	 * is missing or the movie data
	 * @param {JSON} movieData The data of the movie
	 * @returns {JSON | Error} The data of the movie validated or error if movieData doesn't have all requireds params
	 */
	makeMovie(movieData) {
		if (!movieData.hasOwnProperty('backdrop_path')) throw new Error('Movie needs backdrop_path');
		if (!movieData.hasOwnProperty('id')) throw new Error('Movie needs id');
		if (!movieData.hasOwnProperty('imdb_id')) throw new Error('Movie needs imdb_id');
		if (!movieData.hasOwnProperty('original_title')) throw new Error('Movie needs original_title');
		if (!movieData.hasOwnProperty('overview')) throw new Error('Movie needs overview');
		if (!movieData.hasOwnProperty('poster_path')) throw new Error('Movie needs poster_path');
		if (!movieData.hasOwnProperty('title')) throw new Error('Movie needs title');
		return {
			movieData
		}
	}
}

export default MovieEntity;