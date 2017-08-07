import * as express from 'express';
import { Models } from './../models';
const router = express.Router();

router.get('/test', (req: express.Request, res: express.Response) => {
	res.success();
});

export default router;