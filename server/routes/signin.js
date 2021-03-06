const express = require('express');
const oAuthController = require('../controllers/oAuthController');

const router = express.Router();

router.post('/',
oAuthController.verifyToken,
  (req, res) => {

    res.status(200).json({authorized: res.locals.oAuth});
  });

module.exports = router;