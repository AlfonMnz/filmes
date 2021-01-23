class ExpressCallback {
	static async makeCallback(req, res, controllerObject, controllerFunction) {
		let http = {
			params: req.body
		}
		try {
			let result = await controllerObject[controllerFunction](http);
		} catch (e) {
			throw e;
		}

	}
}

export default ExpressCallback;
