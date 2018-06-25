const result = require('./base.service').result,
    NumberResult = require('../repositories/numberresult.repo');

/**
 * service create a new Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = (req, res, next) => {
    // req.body.userId = req.userId;
    NumberResult.save(true, req.body, (err, data) => {
        result(next, err, data,res);
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
    NumberResult.save(false, req.body, (err, data) => {
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
    NumberResult.findById(params, (err, data) => {
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
    NumberResult.isExist(params, (err, data) => {
        result(next, err, data);
    });
};

exports.findAll= (req, res, next)=>{
    NumberResult.findAll((err, data)=>{
        result(next, err, data);
    });
};

exports.deleteById=(req, res, next)=>{
    NumberResult.deleteById(req.params.id, (err,data)=>{
        result(next, err, data);    
    });
};