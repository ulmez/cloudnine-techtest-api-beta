const mongoose = require('../db');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  kul: {type: String}
}, {collection: 'test'});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;