const express = require('express');
const router = express.Router();
 
module.exports = (categoryController) => {
  router.post('/', (req, res) => categoryController.create(req, res));
  return router;
};