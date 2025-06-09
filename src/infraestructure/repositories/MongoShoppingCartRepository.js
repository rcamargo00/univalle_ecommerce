const ShoppingCartRepository = require('../../domain/repositories/ShoppingCartRepository');
const ShoppingCartModel = require('../database/models/ShoppingCartModel');
const ShoppingCart = require('../../domain/entities/ShoppingCart');

class MongoShoppingCartRepository extends ShoppingCartRepository {
  async getAll() {
    const carts = await ShoppingCartModel.find();
    return carts.map(p => new ShoppingCart(p.toObject()));
  }

  async create(cart) {
    const newCart = await ShoppingCartModel.create(cart);
    return new ShoppingCart(newCart.toObject());
  }
}

module.exports = MongoShoppingCartRepository;