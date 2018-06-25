'use strict';

/**
 * Module Employee.
 */
const mongoose = require('mongoose'),
    BaseSchema = require('../libs/base.schema');

const Subject = new BaseSchema({
    subject_name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
});

mongoose.model('subject_info', Subject);