//Importing Entities
import MovieEntity from './movie/movie.entity.js';
import SerieEntity from "./serie/serie.entity";
import EpisodeEntity from "./episode/episode.entity";
import SeasonEntity from "./season/season.entity";

const movieEntity = new MovieEntity();
const serieEntity = new SerieEntity();
const episodeEntity = new EpisodeEntity();
const seasonEntity = new SeasonEntity();

export {movieEntity, serieEntity, seasonEntity, episodeEntity}