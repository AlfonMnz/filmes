//Importing UC
import AddNewMovieUC from "./movies/addNewMovie.js";
import DeleteMovieUC from "./movies/deleteMovie.js";
import AddNewSerieUC from "./series/addNewSerieUC";
import AddNewSeasonUC from "./seasons/addNewSeasonUC";
import AddNewEpisodeUC from "./episodes/addNewEpisodeUC";

import {movieEntity, episodeEntity, seasonEntity, serieEntity} from "../entities/index.js";
import {movieDb, episodeDb, seasonDb, serieDb} from "../db/index.js";

//Movie UC
const addNewMovieUC = new AddNewMovieUC(movieDb, movieEntity);
const deleteMovieUC = new DeleteMovieUC(movieDb);

//Serie UC
const addNewSerieUC = new AddNewSerieUC(serieDb, serieEntity, seasonDb);


//Episode UC
const addNewEpisodeUC = new AddNewEpisodeUC(episodeDb, episodeEntity);

//Season UC
const addNewSeasonUC = new AddNewSeasonUC(seasonDb, seasonEntity, addNewEpisodeUC);


export {
	addNewMovieUC,
	deleteMovieUC,
	addNewEpisodeUC,
	addNewSeasonUC,
	addNewSerieUC
}