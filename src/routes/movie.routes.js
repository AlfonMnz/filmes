import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import movieController from '../controllers/index.js'
const router = new Router();

//router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, movieController.makeMovie));
//router.post('/add', async (req, res) => await ExpressCallback.makeCallback)
router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, movieController.movieController, "addMovie"))
export {router};


//module.exports = {routes}
