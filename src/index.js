import express from 'express';
import {movieRoutes, serieRoutes, seasonRoutes, userRoutes} from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();


//Middleware
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}))
app.use(bodyParser.json({limit: "10mb"}));

//Routes
app.use('/api/movie', movieRoutes);
app.use('/api/serie', serieRoutes);
app.use('/api/season', seasonRoutes);
app.use('/api/user', userRoutes);

app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]');
});
