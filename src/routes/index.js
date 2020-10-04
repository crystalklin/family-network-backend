import express from 'express';
import { testEnvironmentVariable } from '../config';

const indexRouter = express.Router();

/* GET home page. 200 OK status */
indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

export default indexRouter;
