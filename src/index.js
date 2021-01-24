//const express = ('express');
import express from 'express';
import {movieRoutes} from './routes/index.js';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]');
});
app.use('/api/movie', movieRoutes.router);