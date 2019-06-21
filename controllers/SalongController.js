const Salong = require('../models/Salong');

// Get all the salongs stored in mlab MongoDB database
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
