require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(`${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds026898.mlab.com:26898/${process.env.DB_NAME}`, { useNewUrlParser: true });

module.exports = mongoose;