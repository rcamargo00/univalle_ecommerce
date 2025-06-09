const express = require('express');
const config = require('./config')

const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MongoCategoryRepository = require('./infraestructure/repositories/MongoCategoryRepository');
const MongoShoppingCartRepository = require('./infraestructure/repositories/MongoShoppingCartRepository');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');

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
const dbType = config.DB_TYPE;
let productRepository;
let categoryRepository;
let shoppingCartRepository;
if (dbType === 'mysql') {
  productRepository = new MySQLProductRepository();
} else {
  productRepository = new MongoProductRepository();
  categoryRepository = new MongoCategoryRepository();
  shoppingCartRepository = new MongoShoppingCartRepository();
}

const productController = new ProductController(productRepository);
const categoryController = new CategoryController(categoryRepository);
const shoppingCartController = new ShoppingCartController(shoppingCartRepository);

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