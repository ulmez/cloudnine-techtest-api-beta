const mongoose = require('../db');

const Schema = mongoose.Schema;

const salongSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true}
}, {collection: 'salong'});

const Salong = mongoose.model('Salong', salongSchema);

module.exports = Salong;


// {
//   "_id": {
//       "$oid": "5d0763d2fb6fc00e79ab1161"
//   },
//   "name": "Sax & Fön",
//   "image": "url address to image here",
//   "address": {
//       "street": "Rådmansgatan",
//       "street_number": "46",
//       "postcode": "113 57",
//       "city": "Stockholm"
//   },
//   "price": 320,
//   "time": "30 min",
//   "opening_time": {
//       "monday": {
//           "open": "11:00",
//           "close": "19:00"
//       },
//       "tuesday": {
//           "open": "11:00",
//           "close": "19:00"
//       },
//       "wednesday": {
//           "open": "11:00",
//           "close": "19:00"
//       },
//       "thursday": {
//           "open": "10:00",
//           "close": "18:00"
//       },
//       "friday": {
//           "open": "12:00",
//           "close": "18:00"
//       },
//       "saturday": "closed",
//       "sunday": "closed"
//   },
//   "phone": "08-522 389 20",
//   "site_address": "www.salongweb.se",
//   "about": "Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
//   "types": [
//       "hair",
//       "nail"
//   ],
//   "grades": [
//       {
//           "grade": 3
//       },
//       {
//           "grade": 4
//       },
//       {
//           "grade": 2
//       }
//   ]
// }