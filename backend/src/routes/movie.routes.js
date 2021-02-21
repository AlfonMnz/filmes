import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import {movieController} from '../controllers/index.js';

const router = new Router();

router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, movieController, "addMovie"))
router.get('/getById/:id', async (req, res) => await ExpressCallback.makeCallback(req, res, movieController, "getMovieById"))

export default router;
