'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('index.html');
});

router.get('/slider-layout', function(req,res) {
  res.render('slider-layout.html');
});

module.exports = router;
