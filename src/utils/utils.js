export default class utils {
	static cloneObject(object) {
		return JSON.parse(JSON.stringify(object));
	}
}