class ShoppingCartDTO {
  constructor(cart) {
    this.id = cart._id;
    this.name = cart.name;
    this.userID = cart.userID;
    this.items = cart.items;
  }
}
 
module.exports = ShoppingCartDTO;