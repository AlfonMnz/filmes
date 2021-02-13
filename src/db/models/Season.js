import mongoose from "mongoose";

const schema = mongoose.Schema;
const seasonSchema = new schema({
	air_date: Date,
	episodes: [{type: schema.Types.ObjectId, ref: "episodes"}],
	name: String,
	overview: String,
	id: Number,
	poster_path: String,
	season_number: Number,
});
const SeasonModel = mongoose.model('seasons', seasonSchema);
export default SeasonModel;