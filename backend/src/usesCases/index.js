//Importing UC
import AddNewMovieUC from "./movies/addNewMovie.js";
import DeleteMovieUC from "./movies/deleteMovie.js";
import AddNewSerieUC from "./series/addNewSerieUC";
import AddNewSeasonUC from "./seasons/addNewSeasonUC";
import AddNewEpisodeUC from "./episodes/addNewEpisodeUC";
import AddNewUserUC from "./users/addNewUserUC";
import LoginUserUC from './users/loginUserUC';
import GetMovieByIdUC from "./movies/getMovieByIdUC";

//Importing Entities
import {
	movieEntity,
	episodeEntity,
	seasonEntity,
	serieEntity,
	userEntity,
	viewSerieEntity,
	viewMovieEntity
} from "../entities/index.js";

//Importing Db Handlers
import {movieDb, episodeDb, seasonDb, serieDb, userDb, viewSerieDb, viewMovieDb} from "../db/index.js";

//Importing Middlewares
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AddNewViewMovieUC from "./views/viewMovie/addNewViewMovieUC";
import AddNewViewSerieUC from "./views/viewSerie/addNewViewSerieUC";
import GetSerieByIdUC from "./series/getSerieByIdUC";


//Movie UCs
const addNewMovieUC = new AddNewMovieUC(movieDb, movieEntity);
const deleteMovieUC = new DeleteMovieUC(movieDb);
const getMovieByIdUC = new GetMovieByIdUC(movieDb);

//Serie UCs
const addNewSerieUC = new AddNewSerieUC(serieDb, serieEntity, seasonDb);
const getSerieByIdUC = new GetSerieByIdUC(serieDb);

//Episode UCs
const addNewEpisodeUC = new AddNewEpisodeUC(episodeDb, episodeEntity);

//Season UCs
const addNewSeasonUC = new AddNewSeasonUC(seasonDb, seasonEntity, addNewEpisodeUC);

//User UCs
const addNewUserUC = new AddNewUserUC(userDb, userEntity);
const loginUserUC = new LoginUserUC(userDb, bcrypt, jwt)

//View Movie UCs
const addNewViewMovieUC = new AddNewViewMovieUC(viewMovieDb, viewMovieEntity, jwt);

//View Serie UCs
const addNewViewSerieUC = new AddNewViewSerieUC(viewSerieDb, viewSerieEntity, jwt);

export {
	addNewMovieUC,
	deleteMovieUC,
	addNewEpisodeUC,
	addNewSeasonUC,
	addNewSerieUC,
	addNewUserUC,
	loginUserUC,
	addNewViewMovieUC,
	addNewViewSerieUC,
	getSerieByIdUC,
	getMovieByIdUC
}