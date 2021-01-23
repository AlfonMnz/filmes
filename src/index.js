//const express = ('express');
import express from 'express';
import movieRoutes from './routes/index.js';

const app = express();

app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]');
});
app.use('/api/movie', movieRoutes.movieRoutes);