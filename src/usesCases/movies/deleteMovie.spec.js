import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;
chai.use(chaiAsPromised);
import utils from "../../utils/utils.js";
import {deleteMovieUC} from "../index.js";

let exampleId = 550;

describe('Check the Delete Movie UC', () => {
	it('Should return true', async () => {
		let result = await deleteMovieUC.deleteMovie(exampleId);
		expect(result).to.be.equal(true);
	});

	it('Should return invalid ID', async () => {
		await expect(deleteMovieUC.deleteMovie(exampleId+1)).to.eventually.be.rejectedWith(Error, 'Invalid ID');
	});

	it ('Should return invalid type', async() => {
		await expect(deleteMovieUC.deleteMovie('test')).to.eventually.be.rejectedWith(Error, 'Invalid type');
	})
});