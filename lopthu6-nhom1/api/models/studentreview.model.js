'use strict';

/**
 * Module Employee.
 */
const mongoose = require('mongoose'),
    BaseSchema = require('../libs/base.schema');

const StudentReviewSchema = new BaseSchema({
    fullname: {
        type: String
    },
    born_year: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: false
    }



});

mongoose.model('student_review_info', StudentReviewSchema);