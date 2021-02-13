//Importing middlewares
import bcrypt from 'bcrypt';

//Importing Entities
import MovieEntity from './movie/movie.entity.js';
import SerieEntity from "./serie/serie.entity";
import EpisodeEntity from "./episode/episode.entity";
import SeasonEntity from "./season/season.entity";
import UserEntity from "./user/user.entity";


const movieEntity = new MovieEntity();
const serieEntity = new SerieEntity();
const episodeEntity = new EpisodeEntity();
const seasonEntity = new SeasonEntity();
const userEntity = new UserEntity(bcrypt)

export {movieEntity, serieEntity, seasonEntity, episodeEntity, userEntity}