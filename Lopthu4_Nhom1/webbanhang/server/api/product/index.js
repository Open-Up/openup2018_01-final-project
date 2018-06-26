'use strict';

var express = require('express');
var controller = require('./product.controller')
var router = express.Router();

router.post('/', controller.create)
router.delete('/:name', controller.delete);
router.get('/:category/:subcategory', controller.getAll)
router.get('/product-detail/:name', controller.findByName);
module.exports = router;