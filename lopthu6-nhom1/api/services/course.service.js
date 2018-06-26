const result = require('./base.service').result,
    CourseRepo = require('../repositories/course.repo');

/**
 * service create a new Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = (req, res, next) => {
    // req.body.userId = req.userId;
    CourseRepo.save(true, req.body, (err, data) => {
        result(next, err, data);
    });
};

/**
 * service update a Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = (req, res, next) => {
    req.body.id = req.params.id;
    // req.body.userId = req.userId;
    CourseRepo.save(false, req.body, (err, data) => {
        result(next, err, data);
    });
};

/**
 * service find Employee by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.findById = (req, res, next) => {
    //get token and id
    let params = {
        // userId: req.userId,
        id: req.params.id
    };
    CourseRepo.findById(params, (err, data) => {
        result(next, err, data);
    });
};

/**
 * service check Employee has exists by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.checkIdExist = (req, res, next) => {
    //get token and id
    let params = {
        userId: req.userId,
        id: req.params.id
    };
    CourseRepo.isExist(params, (err, data) => {
        result(next, err, data);
    });
};

exports.findAll= (req, res, next)=>{
    CourseRepo.findAll((err, data)=>{
        result(next, err, data);
    });
};

exports.deleteById=(req, res, next)=>{
    CourseRepo.deleteById(req.params.id, (err,data)=>{
        result(next, err, data);    
    });
};