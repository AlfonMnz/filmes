export default class ViewSerieEntity {
	constructor() {
	}

	makeViewSerie(viewSerieData) {
		if (!viewSerieData.hasOwnProperty('id')) throw new Error('Id is required');
		return viewSerieData
	}

}