export default class ExpressCallback {
	static async makeCallback(req, res, controllerObject, controllerFunction) {
		let http = {
			body: req.body,
			header: req.header
		}
		try {
			let result = await controllerObject[controllerFunction](http);
			console.log(result)
		} catch (e) {
			throw e;
		}

	}
}
