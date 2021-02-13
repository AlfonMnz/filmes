export default class UserEntity {
	constructor(bcrypt) {
		this.bcrypt = bcrypt
	}

	async makeUser(userData) {
		try {
			if (!userData.hasOwnProperty('username')) throw new Error('User needs username');
			if (!userData.hasOwnProperty('password')) throw new Error('User needs password');
			if (!userData.hasOwnProperty('email')) throw new Error('User needs email');

			const salt = await this.bcrypt.genSalt(10);
			userData.password = await this.bcrypt.hash(userData.password, salt);

			return userData;

		} catch (e) {
			throw e;
		}
	}
}