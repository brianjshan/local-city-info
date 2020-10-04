const express = require('express');
const businessesController = require('../controllers/businessesController.js');

const router = express.Router();

router.get('/:category/:coordinates', businessesController.getBusinessData, (req, res) => {
  // TODO: object inside json() needs to be constructed from the properties stored in res.locals
  res.send(200).json({});
});

module.exports = router;