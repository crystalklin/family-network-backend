const express = require('express');

const router = express.Router();

/* GET home page. 200 OK status */
router.get('/', (req, res, next) => res.status(200).json({ message: 'Welcome to Express API template' }));

module.exports = router;
