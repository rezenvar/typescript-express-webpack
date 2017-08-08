import * as express from 'express';
import { Models } from './../models';
const router = express.Router();

router.get('/test', (req, res) => {
	res.success();
});

export default router;