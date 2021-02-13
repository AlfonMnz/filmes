import {Router} from 'express';
import ExpressCallback from "../expressCallback/express.callback";
import {serieController} from "../controllers";

const router = new Router();

router.post('/add', async(req, res) => await ExpressCallback.makeCallback(req, res, serieController, "addSerie"));

export default router;