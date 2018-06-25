const app = require('express').Router(),
    SubjectService = require('../services/subject.service');
    // authenticate = require('../libs/authenticate');

//create 
app.post('/', SubjectService.create);

//update 
app.put('/:id', SubjectService.update);

//find 
app.get('/:id', SubjectService.findById);

//Check whether an instance exist in dbs or not
app.head('/:id', SubjectService.checkIdExist);

//Delete 
app.delete('/:id/', SubjectService.deleteById);

//find all
app.get('/', SubjectService.findAll);

module.exports = app;