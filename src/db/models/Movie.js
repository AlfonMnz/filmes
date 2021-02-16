//const mongoose = require("mongoose");

//const Schema = require("mongoose").Schema;
import mongoose from "mongoose";
const Schema = mongoose.Schema;

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