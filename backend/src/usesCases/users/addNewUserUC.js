export default class AddNewUserUC {
	constructor(userDb, userEntity) {
		this.userDb = userDb;
		this.userEntity = userEntity
	}

	async addNewUser(userData) {
		try {
			let existUser = await this.userDb.getUserByEmail(userData.email);
			if (existUser) throw new Error("User exist");

			let user = await this.userEntity.makeUser(userData);

			return await this.userDb.addUser(user);
		} catch (e) {
			throw e;
		}
	}
}