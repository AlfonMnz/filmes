import mongoose from "mongoose";

const Schema = mongoose.Schema;

const serieSchema = new Schema({
	backdrop_path: String,
	created_by: [{}],
	episode_run_time: [Number],
	first_air_date: Date,
	genres: [{ /*type: Schema.Types.ObjectId, ref: "genre" */}],
	homepage: {type: String, default: ""},
	id: Number,
	in_production: Boolean,
	languages: [String],
	last_air_date: Date,
	last_episode_to_air: {},
	name: String,
	next_episode_to_air: {},
	networks: [{}],
	number_of_episodes: Number,
	number_of_seasons: Number,
	origin_country: [String],
	original_language: String,
	original_name: String,
	overview: String,
	popularity: Number,
	poster_path: String,
	production_companies: [{}],
	seasons: [{type: Schema.Types.ObjectId, ref: "seasons"}],
	status: String,
	type: String,
	vote_average: mongoose.Decimal128,
	vote_count: {type: Number, default: 0},
});

const SerieModel = mongoose.model('serie', serieSchema);
export default SerieModel;