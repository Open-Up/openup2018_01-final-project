const Success = function () {
    this.success = true;
    this.data = undefined;
};
const Failure = function () {
    this.success = false;
    this.message = 'undefined';
};

module.exports.result = function (next, error, data, res) {
    const success = new Success();
    if (error) {
        let failure = new Failure();
        failure.message = error;
        console.log(error);
        if (res) {
            return res.send(failure);
        } else {
            return next(error);
        }
    }
    if (data != undefined) {
        success.data = data;
        if (data.totalCount != undefined) {
            success.totalCount = data.totalCount;
            delete data.totalCount;
        } else {
            delete success.totalCount;
        }
    }
    return next(success);
};