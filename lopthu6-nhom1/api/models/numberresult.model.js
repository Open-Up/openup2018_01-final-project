'use strict';

/**
 * Module Number Result.
 */
const mongoose = require('mongoose'),
    BaseSchema = require('../libs/base.schema');

const NumberSchema = new BaseSchema({
    result_name: {
        type: String,
        required: false
    },
    result_amount: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    }
});

mongoose.model('numberresult_info', NumberSchema);