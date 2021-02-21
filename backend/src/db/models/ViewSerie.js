import mongoose from "mongoose";

const schema = mongoose.Schema;

const viewSerieSchema = new schema({
	id: {
		type: Number,
		required: "{PATH} is required"
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	complete: {
		type: Boolean,
		default: true
	},
	user: {
		type: schema.Types.ObjectId,
		ref: "users"
	}
});
const ViewSerieModel = mongoose.model('viewSerie', viewSerieSchema);
export default ViewSerieModel;