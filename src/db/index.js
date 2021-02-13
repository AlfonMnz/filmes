//Importing Handlers
import MovieDb from "./handler/movie.db.js";
import EpisodeDb from "./handler/episode.db";
import SeasonDb from "./handler/season.db";
import SerieDb from "./handler/serie.db";

//Importing models
import MovieModel from './models/Movie.js';
import EpisodeModel from './models/Episode';
import SeasonModel from './models/Season';
import SerieModel from './models/Serie';

import mongoose from 'mongoose';

const movieDb = new MovieDb(MovieModel);
const episodeDb = new EpisodeDb(EpisodeModel);
const seasonDb = new SeasonDb(SeasonModel);
const serieDb = new SerieDb(SerieModel);

mongoose.connect(process.env.MONGOSTRING || 'mongodb://localhost/movieRewind', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));

export {movieDb, episodeDb, seasonDb, serieDb}
