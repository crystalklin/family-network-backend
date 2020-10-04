import express from 'express';
import { indexPage } from '../controllers';

const indexRouter = express.Router();

/* GET home page. 200 OK status */
indexRouter.get('/', indexPage);

export default indexRouter;