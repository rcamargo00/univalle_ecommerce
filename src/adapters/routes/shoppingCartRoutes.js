const express = require('express');
const router = express.Router();
 
module.exports = (shoppingCartController) => {
  router.post('/', (req, res) => shoppingCartController.create(req, res));
  return router;
};