const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const multipart = require('connect-multiparty');

const testsRouter = require('./routes/tests');

const app = express();

app.use("/", express.static(__dirname + "/react-client/build"));

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multipart());

app.use('/tests', testsRouter);

app.listen(port, () => {
  console.log("listening on port: ", port);
});

module.exports = app;
