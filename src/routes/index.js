import express from 'express';

const indexRouter = express.Router();

/* GET home page. 200 OK status */
indexRouter.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Express API template' }));

export default indexRouter;
