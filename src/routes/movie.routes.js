import {Router} from 'express';
import ExpressCallback from '../expressCallback/express.callback.js';
import movieController from '../controllers/index.js'
const router = new Router();
console.log(movieController);

router.post('/add', async (req, res) => await ExpressCallback.makeCallback(req, res, movieController.movieController, "addMovie"))
export {router};


//module.exports = {routes}
