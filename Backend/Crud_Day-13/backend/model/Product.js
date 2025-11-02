const mongoose = require('mongoose');

const productSchema = mongoose.Schema();
const UsersProducts = mongoose.model('product', productSchema); // This will look for 'products' collection

module.exports = { UsersProducts }
