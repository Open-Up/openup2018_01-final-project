const app = require('express').Router(),
    StudentReviewSubject = require('../services/studentreview.service');
    // authenticate = require('../libs/authenticate');

//create 
app.post('/', StudentReviewSubject.create);

//update 
app.put('/:id', StudentReviewSubject.update);

//find 
app.get('/:id', StudentReviewSubject.findById);

//Check whether an instance exist in dbs or not
app.head('/:id', StudentReviewSubject.checkIdExist);

//Delete 
app.delete('/:id/', StudentReviewSubject.deleteById);

//find all
app.get('/', StudentReviewSubject.findAll);

module.exports = app;