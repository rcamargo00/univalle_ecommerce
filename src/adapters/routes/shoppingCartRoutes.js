const express = require('express');
const router = express.Router();
 
module.exports = (shoppingCartController) => {
  router.get('/', (req, res) => shoppingCartController.getAll(req, res));
  router.post('/', (req, res) => shoppingCartController.create(req, res));
  return router;
};