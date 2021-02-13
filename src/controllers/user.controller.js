import utils from "../utils/utils";

export default class UserController {
	constructor(addNewUserUC) {
		this.addNewUserUC = addNewUserUC;
	}

	async addUser(request) {
		try {
			let body = request.body;
			let user = await this.addNewUserUC.addNewUser(body);
			return {
				status: 201,
				jsonResponse: {
					message: "User created correctly",
					data: {user}
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}
}