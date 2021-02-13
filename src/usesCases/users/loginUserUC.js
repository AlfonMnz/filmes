export default class LoginUserUC {
	constructor(userDb, bcrypt, jwt) {
		this.userDb = userDb;
		this.bcrypt = bcrypt;
		this.jwt = jwt
	}

	async loginUser(userData) {

		try {
			let userDb = await this.userDb.getUserByEmail(userData.email);
			if (!userDb) throw new Error("Invalid password or email");

			if (!this.bcrypt.compare(userData.password, userDb.password)) throw new Error("Invalid password or email");

			delete userDb.password;

			let token = this.jwt.sign({'data': userDb}, process.env.JWT || 'jwtSignString');

			return {
				token: token,
				userData: userDb,
			}

		} catch (e) {
			throw e;
		}


	}
}