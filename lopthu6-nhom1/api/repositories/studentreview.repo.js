// const _ = require('lodash'),
const mongoose = require('mongoose'),
    StudentReviewModel = mongoose.model('student_review_info');

/**
* Method Save
* @param {* flag difine is update or create} isNewRecord
* @param {* data update or create} params
* @param {* callback result} callback
*/
exports.save = (isNewRecord, params, callback) => {
    if (!params) {
        return callback('Input data is missing');
    }

    if (isNewRecord !== true && !params.id) {
        return callback('Employee id is missing');
    }

    //create
    if (isNewRecord) {
        StudentReviewModel.create(params, (err, doc) => {
            if (err) {
                return callback(err);
            }
            if (doc) {
                doc = doc.toObject();
                delete doc.createAt;
                delete doc.update;
                delete doc.access;
                delete doc.__v;
                return callback(null, doc);
            } else {
                callback('Can not create new model');
            }
        });
        return;
    }

    StudentReviewModel.findOneAndUpdate({
        _id: params.id,
    }, params, {new: true}).exec((err, doc) => {
        if (err) {
            return callback(err, null);
        }
        if (!doc) {
            return callback('Id or Authentication is missing', null);
        }

        if (doc) {
            doc = doc.toObject();
            delete doc.createAt;
            delete doc.update;
            delete doc.access;
            delete doc.__v;
            return callback(null, doc);
        }
        callback('Can not update model');
    });
};

exports.findAll = (callback) => {
    StudentReviewModel
        .find()
        .exec((err, docs) => {
            docs.forEach((doc, index, docs) => {
                doc = doc.toObject();
                delete doc.createAt;
                delete doc.update;
                delete doc.access;
                delete doc.__v;
                docs[index] = doc;
            });
            callback(err, docs);
        });
};

exports.findAllActive = (callback) => {
    StudentReviewModel
        .find({isActive: true})
        .exec((err, docs) => {
            docs.forEach((doc, index, docs) => {
                doc = doc.toObject();
                delete doc.createAt;
                delete doc.update;
                delete doc.access;
                delete doc.__v;
                docs[index] = doc;
            });
            callback(err, docs);
        });
};

exports.findById = (params, callback) => {
    StudentReviewModel.findById(params.id, (err, doc) => {
        if (!doc) {
            return callback('Employee is missing');
        }
        doc = doc.toObject();
        delete doc.createAt;
        delete doc.update;
        delete doc.access;
        delete doc.__v;
        callback(err, doc);
    });
};

exports.deleteById = (id, callback) => {
    StudentReviewModel.findByIdAndRemove(id, (err) => {
        callback(err);
    });
};
