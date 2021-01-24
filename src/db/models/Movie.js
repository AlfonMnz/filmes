//const mongoose = require("mongoose");

//const Schema = require("mongoose").Schema;
import mongoose from "mongoose";
const Schema = mongoose.Schema;
/**
 * MovieModel
 * @typedef {Object} MovieModel
 * @property {Boolean} [adult] If the movie is to adult
 * @property {String} backdrop_path The pic URL
 * @property {String} [belongs_to_collection] @todo Buscar que es este parámetro
 * @property {Number} budget The budget of the movie
 * @property {Array<JSON>} genres The genres of the movie
 * @property {String} [homepage] @todo Buscar que es este parámetro
 * @property {Number} id The id of the movie in TMDB
 * @property {number} imdb_id The id of the movie in IMDB
 * @property {String} original_language The original language of the movie
 * @property {String} original_title The original title of the movie
 * @property {String} overview The description of the movie
 * @property {Number} [popularity] The popularity of the movie
 * @property {Array<JSON>} production_companies The companies that produced the film
 * @property {Date} release_date The date of the movie's release
 * @property {Number} [revenue] The revenue of the movie
 * @property {Number} [runtime] The runtime of the movie
 * @property {Array<JSON>} spoken_languages The languages of the movie
 * @property {String} [status] @todo Buscar que es este parámetro
 * @property {String} [tagline] @todo Buscar que es este parámetro
 * @property {String} title The title of the film
 * @property {Boolean} video @todo Buscar que es este parámetro
 * @property {Number} vote_average The average of the votes on TMDB
 * @property {Number} [vote_count] The number of votes in TMDB
 */
const movieSchema = new Schema({
	adult: {
		type: Boolean,
		default: false,
	},
	backdrop_path: {
		type: String,
		required: "{PATH} is required",
	},
	belongs_to_collection: {
		type: String,
		default: "",
	},
	budget: {
		type: Number,
	},
	genres: [{ /*type: Schema.Types.ObjectId, ref: "genre"*/}],
	homepage: {type: String, default: ""},
	id: {type: Number, required: "{PATH} is required"},
	imdb_id: {type: String, required: "{PATH} is required"},
	original_language: {type: String},
	original_title: {type: String, required: "{PATH} is required"},
	overview: {type: String, required: "{PATH} is required"},
	popularity: {type: Number, default: 0},
	poster_path: {type: String, required: "{PATH} is required"},
	production_companies: [{}],
	release_date: Date,
	revenue: {type: Number, default: 0},
	runtime: {type: Number, default: 0},
	spoken_languages: [{}],
	status: {type: String, default: ""},
	tagline: {type: String, default: ""},
	title: {type: String, required: "{PATH} is required"},
	video: Boolean,
	vote_average: mongoose.Decimal128,
	vote_count: {type: Number, default: 0},
});
const MovieModel = mongoose.model("movie", movieSchema);
export default MovieModel;