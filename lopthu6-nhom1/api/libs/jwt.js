const jwt = require('jsonwebtoken');
module.exports.decode = async (token, secret) => {
    let dataDecode;
    try {
        dataDecode = await jwt.verify(token, secret);
    }
    catch (err) {
        throw err;
    }
    return dataDecode;
};