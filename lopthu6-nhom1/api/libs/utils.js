
const _ = require('lodash'),
    crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    constants = require('../all/constants'),
    request = require('request-promise'),
    password = constants.SECRET;


exports.encrypt = function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};

exports.decrypt = function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
};
exports.checkIdInList = (id, list) => {
    let res = false;
    if (!list || !list.length) {
        return res;
    }
    list.forEach(elem => {
        if (id === elem.id) {
            res = true;
        }
    });
    return res;
};

exports.modifyOutPut = (input) => {
    if (!input) {
        return input;
    }
    input = input.toObject();
    delete input.createdAt;
    delete input.update;
    delete input.access;
    delete input.firstLogIn;
    delete input.verified;
    delete input.active;
    delete input.groups;
    delete input.bank;
    delete input.identity;
    delete input.devices;
    delete input.reference;
    return input;
};

/**
* Method createPager
* @param {* current page number *} pageNumber
* @param {* limit objects return *} pageSize
* @return { Object } skip, limit
*/
exports.createPager = (pageNumber, pageSize) => {
    pageNumber = pageNumber ? parseInt(pageNumber) : 1;
    pageSize = pageSize ? parseInt(pageSize) : 10;

    if (pageSize <= 0 || !_.isNumber(pageSize)) {
        pageSize = 10; // default min
    }

    if (pageSize > 100 || !_.isNumber(pageSize)) {
        pageSize = 100; // default max
    }

    if (pageNumber <= 0 || !_.isNumber(pageNumber)) {
        pageNumber = 1;
    }

    // console.log('createPager', pageNumber, pageSize);

    return {
        limit: pageSize,
        skip: (pageNumber - 1) * pageSize
    };
};

/**
* Check access token
*/
module.exports.getAPI = async (api, token, callback) => {
    let result = await request({ // Call API update balnce buyerID
        headers: {
            'accessToken': token
        },
        uri: api,
        method: 'GET',
        json: true
    });
    return result.data;
};

/**
* Check access token
*/
module.exports.postAPI = async (api, body, token, callback) => {
    let result = await request({ // Call API update balnce buyerID
        headers: {
            'accessToken': token
        },
        uri: api,
        method: 'POST',
        json: body
    });
    return result.data;
};