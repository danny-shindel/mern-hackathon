const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAll,
};

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  // Add the item to the cart
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  // Update the cart's isPaid property to true
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function getAll(req, res) {
  // Add the item to the cart
  const orders = await Order.getAll(req.user._id);
  res.json(orders);
}

// async function getAll(req, res) {
//   const orders = await Order.find({user: req.user._id, isPaid: true}).exec();
//   const test  = orders.map(order => {
//     {...order, order.total = order.orderTotal}
//   })
//   console.log(test)
//   res.json(orders);
// }
