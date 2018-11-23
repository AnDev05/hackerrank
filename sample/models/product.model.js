
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String
  },
  price: {
     type: Number
  }
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);