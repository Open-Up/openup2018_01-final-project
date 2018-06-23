'use strict';
var express = require('express');
var router = express.Router();
var author = {
  name: 'nguyen duc tai',
  birthday: '20/03/1997',
  live: 'Ha Noi, Viet Nam',
  home: 'Thai Binh, Viet Nam',
  school: 'Ha Noi University of Science and Technology',
  facebook: 'https://www.facebook.com/nguyenductai1234',
  github: '',
  googleplus: '',
};

// router: /account/
router.get('/', function(req,res) {
  res.send(author);
  res.end();
});

router.post('/', function(req,res) {
  console.log(req.body);
  res.send(req.body);
  res.end();
});

// router: /account/log-in-layout
router.get('/log-in-layout', function(req,res) {
  res.render('log-in-layout.html');
  res.end();
});

router.post('/log-in-layout', function(req,res) {
  var isLogIn = (req.body.email==='nguyenductai.eve@gmail.com')&&(req.body.password==='123456789');
  res.send(isLogIn);
  res.end();
});

// router: /account/log-out-layout
router.get('/log-out-layout', function(req,res) {
  res.render('log-out-layout.html');
  res.end();
});

// router: /account/author-layout
router.get('/author-layout', function(req,res) {
  res.render('author-layout.html');
  res.end();
});

module.exports = router;
