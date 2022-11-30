const { Usuario } = require('../models/user.model');
const { Recurso } = require('../models/recurso.model');
const databaseMysql = require('./mysql.config');

Usuario.sync();
Recurso.sync();
databaseMysql.sync();
