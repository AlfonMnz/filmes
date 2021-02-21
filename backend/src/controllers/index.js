//Importing Controllers
import MovieController from './movie.controller.js';
import SeasonController from "./season.controller";
import EpisodeController from "./episode.controller";
import SerieController from "./serie.controller";
import UserController from "./user.controller";
import ViewMovieController from "./viewMovie.controller";
import ViewSerieController from "./viewSerie.controller";


//Importing UC
import {
	addNewMovieUC,
	addNewSeasonUC,
	addNewSerieUC,
	addNewUserUC,
	loginUserUC,
	addNewViewSerieUC,
	addNewViewMovieUC,
	getSerieByIdUC,
	getMovieByIdUC
} from "../usesCases/index.js";

const movieController = new MovieController(addNewMovieUC, getMovieByIdUC);
const seasonController = new SeasonController(addNewSeasonUC);
const episodeController = new EpisodeController();
const serieController = new SerieController(addNewSerieUC, getSerieByIdUC);
const userController = new UserController(addNewUserUC, loginUserUC);
const viewMovieController = new ViewMovieController(addNewViewMovieUC);
const viewSerieController = new ViewSerieController(addNewViewSerieUC);


export {
	movieController,
	seasonController,
	episodeController,
	serieController,
	userController,
	viewMovieController,
	viewSerieController
}