const result = require('./base.service').result,
    TeacherRepo = require('../repositories/teacher.repo');

/**
 * service create a new Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = (req, res, next) => {
    // req.body.userId = req.userId;
    TeacherRepo.save(true, req.body, (err, data) => {
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
    TeacherRepo.save(false, req.body, (err, data) => {
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
    TeacherRepo.findById(params, (err, data) => {
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
    TeacherRepo.isExist(params, (err, data) => {
        result(next, err, data);
    });
};

exports.findAll= (req, res, next)=>{
    TeacherRepo.findAll((err, data)=>{
        result(next, err, data);
    });
};

exports.deleteById=(req, res, next)=>{
    TeacherRepo.deleteById(req.params.id, (err,data)=>{
        result(next, err, data);    
    });
};