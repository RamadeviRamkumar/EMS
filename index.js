const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/routes.js')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(7000, () => console.log('Server started at port : 7000'));

app.use('/employees', routes);