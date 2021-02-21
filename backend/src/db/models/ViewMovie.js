import mongoose from "mongoose";

const schema = mongoose.Schema;

const viewMovieSchema = new schema({
	id: {
		type: Number,
		required: "{PATH} is required"
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	complete: {
		type: Boolean,
		default: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user"
	}
});

const ViewMovieModel = mongoose.model('viewMovie', viewMovieSchema)
export default ViewMovieModel;
