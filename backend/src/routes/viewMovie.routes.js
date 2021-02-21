import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import {viewMovieController} from "../controllers";

const router = new Router();

router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, viewMovieController, "addViewMovie"));

export default router;