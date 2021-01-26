import chai from 'chai';

const expect = chai.expect;
import MovieEntity from "./movie.entity.js";
import utils from "../../utils/utils.js";

let exampleData = {
	"adult": false,
	"backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
	"belongs_to_collection": null,
	"budget": 63000000,
	"genres": [
		{
			"id": 18,
			"name": "Drama"
		}
	],
	"homepage": "",
	"id": 550,
	"imdb_id": "tt0137523",
	"original_language": "en",
	"original_title": "Fight Club",
	"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
	"popularity": 0.5,
	"poster_path": null,
	"production_companies": [
		{
			"id": 508,
			"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
			"name": "Regency Enterprises",
			"origin_country": "US"
		},
		{
			"id": 711,
			"logo_path": null,
			"name": "Fox 2000 Pictures",
			"origin_country": ""
		},
		{
			"id": 20555,
			"logo_path": null,
			"name": "Taurus Film",
			"origin_country": ""
		},
		{
			"id": 54050,
			"logo_path": null,
			"name": "Linson Films",
			"origin_country": ""
		},
		{
			"id": 54051,
			"logo_path": null,
			"name": "Atman Entertainment",
			"origin_country": ""
		},
		{
			"id": 54052,
			"logo_path": null,
			"name": "Knickerbocker Films",
			"origin_country": ""
		},
		{
			"id": 25,
			"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
			"name": "20th Century Fox",
			"origin_country": "US"
		}
	],
	"production_countries": [
		{
			"iso_3166_1": "US",
			"name": "United States of America"
		}
	],
	"release_date": "1999-10-12",
	"revenue": 100853753,
	"runtime": 139,
	"spoken_languages": [
		{
			"iso_639_1": "en",
			"name": "English"
		}
	],
	"status": "Released",
	"tagline": "How much can you know about yourself if you've never been in a fight?",
	"title": "Fight Club",
	"video": false,
	"vote_average": 7.8,
	"vote_count": 3439
}
let movieEntity = new MovieEntity();
describe('Check Movie Entity', () => {
	it('Should return the movie', () => {
		let data = exampleData;
		let result = movieEntity.makeMovie(data);
		expect(result).to.equal(data)
	});
	it('Should throw an error without backdrop_path', () => {
		let data = utils.cloneObject(exampleData);
		delete data.backdrop_path;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs backdrop_path');
	});
	it('Should return an error without id', () => {
		let data = utils.cloneObject(exampleData);
		delete data.id;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs id');

	});
	it('Should return an error without imdb_id', () => {
		let data = utils.cloneObject(exampleData);
		delete data.imdb_id;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs imdb_id');

	});
	it('Should return an error without original_title', () => {
		let data = utils.cloneObject(exampleData);
		delete data.original_title;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs original_title');

	});
	it('Should return an error without overview', () => {
		let data = utils.cloneObject(exampleData);
		delete data.overview;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs overview');

	});
	it('Should return an error without poster_path', () => {
		let data = utils.cloneObject(exampleData);
		delete data.poster_path;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs poster_path');

	});
	it('Should return an error without title', () => {
		let data = utils.cloneObject(exampleData);
		delete data.title;
		expect(function () { movieEntity.makeMovie(data)}).throw(Error, 'Movie needs title');

	});
})