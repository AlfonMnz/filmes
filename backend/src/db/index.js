//Importing Handlers
import MovieDb from "./handler/movie.db.js";
import EpisodeDb from "./handler/episode.db";
import SeasonDb from "./handler/season.db";
import SerieDb from "./handler/serie.db";
import UserDb from "./handler/user.db";
import ViewMovieDb from "./handler/viewMovie.db";
import ViewSerieDb from "./handler/viewSerie.db";

//Importing models
import MovieModel from './models/Movie.js';
import EpisodeModel from './models/Episode';
import SeasonModel from './models/Season';
import SerieModel from './models/Serie';
import UserModel from "./models/User";
import ViewMovieModel from "./models/ViewMovie";
import ViewSerieModel from "./models/ViewSerie";


import mongoose from 'mongoose';

const movieDb = new MovieDb(MovieModel);
const episodeDb = new EpisodeDb(EpisodeModel);
const seasonDb = new SeasonDb(SeasonModel);
const serieDb = new SerieDb(SerieModel);
const userDb = new UserDb(UserModel);
const viewMovieDb = new ViewMovieDb(ViewMovieModel);
const viewSerieDb = new ViewSerieDb(ViewSerieModel);


mongoose.connect(process.env.MONGOSTRING || 'mongodb://localhost/movieRewind', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));

export {movieDb, episodeDb, seasonDb, serieDb, userDb, viewMovieDb, viewSerieDb}
