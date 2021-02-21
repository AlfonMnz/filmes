import mongoose from "mongoose";

const schema = mongoose.Schema;
const episodeSchema = new schema({
	air_date: Date,
	crew: [{}],
	episode_number: Number,
	guest_stars: [{}],
	name: String,
	overview: String,
	id: Number,
	production_code: String,
	season_number: Number,
	still_path: String,
	vote_average: mongoose.Decimal128,
	vote_count: {type: Number, default: 0},

});
const EpisodeModel = mongoose.model('episode', episodeSchema);
export default EpisodeModel