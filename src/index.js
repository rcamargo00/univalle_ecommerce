const express = require('express');
const config = require('./config')
// const MongoProductRepository = require('./infrastructure/repositories/MongoProductRepository');
const ProductController = require('./adapters/controllers/ProductController');
const CategoryController = require('./adapters/controllers/CategoryController');
const ShoppingCartController = require('./adapters/controllers/ShoppingCartController');
const productRoutes = require('./adapters/routes/productRoutes');
const categoryRoutes = require('./adapters/routes/categoryRoutes');
const shoppingCartRoutes = require('./adapters/routes/shoppingCartRoutes');
const { verifyToken } = require('./adapters/middlewares/authJwt');

const app = express();
const port = config.port;

// Dependencies
// const productRepository = new MongoProductRepository();
// const productController = new ProductController(productRepository);
// const categoryRepository = new MongoCategoryRepository();
// const categoryController = new CategoryController(categoryRepository);
// const shoppingCartRepository = new MongoShoppingCartRepository();
// const shoppingCartController = new ShoppingCartController(shoppingCartRepository);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Routes
app.use('/api/v1/products', verifyToken, productRoutes(productController));
app.use('/api/v1/categories', verifyToken, categoryRoutes(categoryController));
app.use('/api/v1/shopping-cart', verifyToken, shoppingCartRoutes(shoppingCartController));
 
// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});
 
// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}`);
});