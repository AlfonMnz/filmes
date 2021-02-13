export default class UserDb {
	constructor(userModel) {
		this.userModel = userModel;
	}

	async getUserByEmail(userEmail) {
		try {
			return await this.userModel.findOne({email: userEmail});
		} catch (e) {
			throw e;
		}

	}

	async addUser(user) {
		try {
			let newUserModel = await new this.userModel(user);
			return await newUserModel.save();
		} catch (e) {
			throw e;
		}
	}
}