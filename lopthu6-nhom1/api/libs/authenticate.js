const constants = require('../all/constants');
var ALLS = require('../all/all'),
    jwtLib = require('../libs/jwt');


/**
* Get access token from params, headers, cookies
*/
function getToken(req) {
    var params = ['access_token', 'accesstoken'];
    var headers = ['X-Access-Token', 'authorization', 'accesstoken'];
    var cookies = ['access_token', 'authorization', 'accesstoken'];
    var i, length, id;

    for (length = params.length; i < length; i++) {
        var param = params[i];
        // replacement for deprecated req.param()
        id = req.params && req.params[param] !== undefined ? req.params[param] :
            req.body && req.body[param] !== undefined ? req.body[param] :
                req.query && req.query[param] !== undefined ? req.query[param] :
                    undefined;

        if (typeof id === 'string') {
            return id;
        }
    }

    for (i = 0, length = headers.length; i < length; i++) {
        id = req.header(headers[i]);

        if (typeof id === 'string') {
            if (id.indexOf('Bearer ') === 0) {
                id = id.substring(7);
                var buf = new Buffer(id, 'base64');
                id = buf.toString('utf8');
            } else if (/^Basic /i.test(id)) {
                id = id.substring(6);
                id = (new Buffer(id, 'base64')).toString('utf8');
                var parts = /^([^:]*):(.*)$/.exec(id);
                if (parts) {
                    id = parts[2].length > parts[1].length ? parts[2] : parts[1];
                }
            }
            return id;
        }
    }

    if (req.signedCookies) {
        for (i = 0, length = cookies.length; i < length; i++) {
            id = req.signedCookies[cookies[i]];

            if (typeof id === 'string') {
                return id;
            }
        }
    }
    return null;
}
exports.getToken = (req) => getToken(req);

/**
 * Check access token of user without role
 */
module.exports.checkToken = (req, res, next) => {
    exports.userAuthenticate(req, res, function (err, data) {
        if (err) {
            return next('Authentication is required');
        }
        req.iduser = req.user._id;
        next();
    });
};


/**
 * check authen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.internalAuthenticate = async (req, res, next) => {
    try {
        let token = getToken(req);
        let dataDecode;
        dataDecode = await jwtLib.decode(token, ALLS.INTERNAL_TOKEN);
        if (!dataDecode || !dataDecode.role) {
            throw constants.AUTHENTICATE_FAIL;
        }
        req.userId = dataDecode._id;
        return next(null, req.userId);
    }
    catch (err) {
        return next(constants.AUTHENTICATE_FAIL);
    }
};

module.exports.setUserId = (req, res, next) => {
    req.userId = req.user.id ? req.user.id : req.user._id;
    next();
};