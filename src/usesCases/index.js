//Importing UC
import AddNewMovieUC from "./movies/addNewMovie.js";
import DeleteMovieUC from "./movies/deleteMovie.js";

import {movieEntity} from "../entities/index.js";
import {movieDb} from "../db/index.js";

const addNewMovieUC = new AddNewMovieUC(movieDb, movieEntity);
const deleteMovieUC = new DeleteMovieUC(movieDb)
export {
	addNewMovieUC,
	deleteMovieUC,
}