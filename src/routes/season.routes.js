import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import {seasonController} from '../controllers/index.js';

const router = new Router();

router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, seasonController, "addSeason"));

export default router;