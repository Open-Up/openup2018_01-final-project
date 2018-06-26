module.exports = () => {
    return (data, req, res, next) => {
        if (data && data.success === true) {
            return res.json(data);
        }
        next(data);
    };
};