import AddNewMovieUC from "./movies/addNewMovie.js";
import {movieEntity} from "../entities/index.js";
import {movieDb} from "../db/index.js";

const addNewMovieUC = new AddNewMovieUC(movieDb, movieEntity);
export {
	addNewMovieUC,
}