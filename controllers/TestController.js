const Test = require('../models/Test');

module.exports.all_tests = (req, res, next) => {
    Test.find()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json({
            message: err
        });
    });
}
