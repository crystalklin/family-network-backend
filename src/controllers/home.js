import { testEnvironmentVariable } from '../config';

/* GET home page. 200 OK status */
export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });