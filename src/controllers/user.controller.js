import utils from "../utils/utils";

export default class UserController {
	constructor(addNewUserUC, loginUserUC) {
		this.addNewUserUC = addNewUserUC;
		this.loginUserUC = loginUserUC;
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

	async loginUser(request) {
		try {
			let body = request.body;
			let data = await this.loginUserUC.loginUser(body);
			request.req.session.token = data.token;
			return {
				status: 200,
				jsonResponse: {
					message: "Login correctly",
					data: data.token
				}
			}
		} catch (e) {
			return utils.serverErrorResponse(e)
		}
	}
}