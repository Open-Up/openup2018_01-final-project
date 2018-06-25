const app = require('express').Router(),
    TeacherService = require('../services/numberresult.service');
    // authenticate = require('../libs/authenticate');

//create 
app.post('/', TeacherService.create);

//update 
app.put('/:id/', TeacherService.update);

//find 
app.get('/:id', TeacherService.findById);

//Check whether an instance exist in dbs or not
app.head('/:id', TeacherService.checkIdExist);

//Delete 
app.delete('/:id/', TeacherService.deleteById);

//find all
app.get('/', TeacherService.findAll);

module.exports = app;