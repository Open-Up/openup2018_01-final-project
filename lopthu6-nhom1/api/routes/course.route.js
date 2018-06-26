const app = require('express').Router(),
    CourseService = require('../services/course.service');
    // authenticate = require('../libs/authenticate');

//create 
app.post('/', CourseService.create);

//update 
app.put('/:id/', CourseService.update);

//find 
app.get('/:id', CourseService.findById);

//Check whether an instance exist in dbs or not
app.head('/:id', CourseService.checkIdExist);

//Delete 
app.delete('/:id/', CourseService.deleteById);

//find all
app.get('/', CourseService.findAll);

module.exports = app;