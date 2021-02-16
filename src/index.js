import express from 'express';
import {movieRoutes, serieRoutes, seasonRoutes, userRoutes, viewSerieRoutes, viewMovieRoutes} from './routes/index.js';
import bodyParser from 'body-parser';
import expressSession from 'express-session';

import cookieParser from 'cookie-parser';

const app = express();


//Middleware
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}))
app.use(bodyParser.json({limit: "10mb"}));
app.use(cookieParser());
app.use(expressSession({
	secret: process.env.SESSION_SECRET || "sessionSecretString",
	resave: true,
	saveUninitialized: true,
	cookie: {secure: false, maxAge: process.env.COOKIE_MAX_AGE || 3600 * 5}
}));

//Routes
app.use('/api/movie', movieRoutes);
app.use('/api/serie', serieRoutes);
app.use('/api/season', seasonRoutes);
app.use('/api/user', userRoutes);
app.use('/api/viewMovie', viewMovieRoutes);
app.use('/api/viewSerie', viewSerieRoutes);


app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]');
});
