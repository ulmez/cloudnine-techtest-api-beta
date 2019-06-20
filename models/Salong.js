const mongoose = require('../db');

const Schema = mongoose.Schema;

const salongSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  address: {type: Object, required: true},
  price: {type: Number, required: true},
  time: {type: String, required: true},
  opening_time: {type: Object, required: true},
  phone: {type: String, required: true},
  site_address: {type: String, required: true},
  about: {type: String, required: true},
  types: {type: Array, required: true},
  grades: {type: Array, required: true}
}, {collection: 'salong'});

const Salong = mongoose.model('Salong', salongSchema);

module.exports = Salong;
