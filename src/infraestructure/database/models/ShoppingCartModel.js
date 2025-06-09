const mongoose = require('../mongoose');
 
const shoppingCartSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  items: { type: Array, required: true },
}, { timestamps: true });
 
module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);