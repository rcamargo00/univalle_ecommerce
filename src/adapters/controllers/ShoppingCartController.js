const CreateShoppingCart = require('../../application/useCases/CreateShoppingCart');
const ShoppingCartDTO = require('../../application/dtos/ShoppingCartDTO');
 
class ShoppingCartController {
  constructor(shoppingCart) {
    this.createShoppingCart = new CreateShoppingCart(shoppingCart);
  }
 
  async create(req, res) {
    try {
      const cart = await this.createShoppingCart.execute(req.body);
      res.status(201).json(new ShoppingCartDTO(cart));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
 
module.exports = ShoppingCartController;