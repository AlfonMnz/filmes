export default class ExpressCallback {
	static async makeCallback(req, res, controllerObject, controllerFunction) {
		let http = {
			body: req.body,
			header: req.header,
			params: req.params,
			res: res,
			req: req,
		}
		try {
			let result = await controllerObject[controllerFunction](http);
			return res.status(result.status).json(result.jsonResponse)
		} catch (e) {
			throw e;
		}

	}
}
