import MovieController from  './movie.controller.js';
import addNewMovie from "../usesCases/addNewMovie.js";

const movieController = new MovieController(new addNewMovie());

export default {movieController}