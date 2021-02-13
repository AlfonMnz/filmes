import {Router} from 'express';
import ExpressCallback from "../expressCallback/express.callback";
import {userController} from "../controllers";

const router = new Router();

router.post('/register', async (req, res) => await ExpressCallback.makeCallback(req, res, userController, "addUser"));

export default router;