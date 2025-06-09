const express = require('express');
const router = express.Router();
 
module.exports = (categoryController) => {
  router.get('/', (req, res) => categoryController.getAll(req, res));
  router.post('/', (req, res) => categoryController.create(req, res));
  return router;
};