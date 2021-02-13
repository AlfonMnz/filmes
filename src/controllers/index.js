//Importing Controllers
import MovieController from './movie.controller.js';
import SeasonController from "./season.controller";
import EpisodeController from "./episode.controller";
import SerieController from "./serie.controller";

//Importing UC
import {addNewMovieUC, addNewSeasonUC, addNewSerieUC} from "../usesCases/index.js";

const movieController = new MovieController(addNewMovieUC);
const seasonController = new SeasonController(addNewSeasonUC);
const episodeController = new EpisodeController();
const serieController = new SerieController(addNewSerieUC);
export {movieController, seasonController, episodeController, serieController}