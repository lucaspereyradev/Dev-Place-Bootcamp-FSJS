require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.routes.js');
require('./config/utils.db');

const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/test/', indexRoutes);

app.listen(port, () => console.log(`Connection established on port ${port}`));
