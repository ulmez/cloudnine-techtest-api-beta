const mongoose = require('../db');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  kul: {type: String}
}, {collection: 'test'});

const User = mongoose.model('Test', testSchema);

module.exports = User;