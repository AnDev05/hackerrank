const express = require('express');
const app = express();
const productRoute = express.Router();


const Product = require('../models/product.model');


/**
 * Gen create product
 */
productRoute.route('/create').get(function (req, res) {
  res.render('create');
});

/**
 * List product
 */
productRoute.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('list', { products: products });
    }
  });
});

/**
 * Save product to db
 */
productRoute.route('/save').post(function (req, res) {
  const product = new Product(req.body);
  console.log(product);

  product.save()
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = productRoute;

