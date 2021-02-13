import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
	email: {
		type: String,
		required: "{PATH} is required"
	},
	password : {
		type: String,
		required: "{PATH} is required"
	},
	username: {
		type: String,
		required: "{PATH} is requided"
	}
});

const UserModel = mongoose.model('user', userSchema);
export default UserModel;