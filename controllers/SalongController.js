const Salong = require('../models/Salong');

module.exports.all_salongs = (req, res, next) => {
    Salong.find()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json({
            message: err
        });
    });
}
