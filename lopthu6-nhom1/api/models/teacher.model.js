'use strict';

/**
 * Module Employee.
 */
const mongoose = require('mongoose'),
    BaseSchema = require('../libs/base.schema');

const TeacherSchema = new BaseSchema({
    fullname: {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

mongoose.model('teacher_info', TeacherSchema);