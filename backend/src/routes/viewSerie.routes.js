import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import {viewSerieController} from "../controllers";

const router = new Router();

router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, viewSerieController, "addViewSerie"));

export default router;