//Importing UC
import AddNewMovieUC from "./movies/addNewMovie.js";
import DeleteMovieUC from "./movies/deleteMovie.js";
import AddNewSerieUC from "./series/addNewSerieUC";
import AddNewSeasonUC from "./seasons/addNewSeasonUC";
import AddNewEpisodeUC from "./episodes/addNewEpisodeUC";
import AddNewUserUC from "./users/addNewUserUC";

import {movieEntity, episodeEntity, seasonEntity, serieEntity, userEntity} from "../entities/index.js";
import {movieDb, episodeDb, seasonDb, serieDb, userDb} from "../db/index.js";

//Movie UC
const addNewMovieUC = new AddNewMovieUC(movieDb, movieEntity);
const deleteMovieUC = new DeleteMovieUC(movieDb);

//Serie UC
const addNewSerieUC = new AddNewSerieUC(serieDb, serieEntity, seasonDb);


//Episode UC
const addNewEpisodeUC = new AddNewEpisodeUC(episodeDb, episodeEntity);

//Season UC
const addNewSeasonUC = new AddNewSeasonUC(seasonDb, seasonEntity, addNewEpisodeUC);

//User UC
const addNewUserUC = new AddNewUserUC(userDb, userEntity);

export {
	addNewMovieUC,
	deleteMovieUC,
	addNewEpisodeUC,
	addNewSeasonUC,
	addNewSerieUC,
	addNewUserUC,
}