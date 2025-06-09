class ShoppingCartDTO {
  constructor(cart) {
    this.id = cart._id;
    this.userID = cart.userID;
    this.items = cart.items;
  }
}
 
module.exports = ShoppingCartDTO;