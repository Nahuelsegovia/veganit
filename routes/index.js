var express = require('express');
const pool = require('../database/database.js');
const Product = require('../models/Product');
var router = express.Router();
const Products = require('../models/Product');
/* GET home page. */
router.get('/dada', async function(req, res, next) {
  const Products = new Product('productos');
  await Products.getAll().then((result) => result)
  .then((result) => {
    res.send(result);
  })
  .catch((err) => err);
  
});

module.exports = router;
