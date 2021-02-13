export default class utils {
	static cloneObject(object) {
		return JSON.parse(JSON.stringify(object));
	}

	static serverErrorResponse(e) {
		return {
			status: 500,
			jsonResponse: {
				message: "Something went wrong",
				errorMessage: e.message
			}
		}
	}
}