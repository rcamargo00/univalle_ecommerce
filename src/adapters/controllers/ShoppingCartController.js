const CreateShoppingCart = require('../../application/useCases/CreateShoppingCart');
const ShoppingCartDTO = require('../../application/dtos/ShoppingCartDTO');
 
class ShoppingCartController {
  constructor(shoppingCartRepository) {
    this.shoppingCartRepository = shoppingCartRepository;
    this.createShoppingCart = new CreateShoppingCart(shoppingCartRepository);
  }
 
  async create(req, res) {
    try {
      const cart = await this.createShoppingCart.execute(req.body);
      res.status(201).json(new ShoppingCartDTO(cart));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const carts = await this.shoppingCartRepository.getAll();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving shopping carts' });
    }
  }
}
 
module.exports = ShoppingCartController;