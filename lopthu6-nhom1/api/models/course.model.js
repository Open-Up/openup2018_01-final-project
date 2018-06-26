'use strict';

/**
 * Module Employee.
 */
const mongoose = require('mongoose'),
    BaseSchema = require('../libs/base.schema');

const CourseSchema = new BaseSchema({
    course_name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required:false
    },
    date_public: {
        type: String,
        required: false
    },
    subject:{
        type:String,
        required: true
    },
    teacher:{
        type: String,
        required: false
    }
});

mongoose.model('course_info', CourseSchema);