import MovieController from './movie.controller.js';
import {addNewMovieUC} from "../usesCases/index.js";

const movieController = new MovieController(addNewMovieUC);

export {movieController}