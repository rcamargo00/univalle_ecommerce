const ShoppingCart = require('../../domain/entities/ShoppingCart');
 
class CreateShoppingCart {
  constructor(shoppingCartRepository) {
    this.shoppingCartRepository = shoppingCartRepository;
  }
 
  async execute(shoppingCartData) {
    const shoppingCart = new ShoppingCart(shoppingCartData);
    return await this.shoppingCartRepository.create(shoppingCart);
  }
}
 
module.exports = CreateShoppingCart;