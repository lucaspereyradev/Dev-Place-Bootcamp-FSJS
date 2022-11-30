var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');

var Recurso = sequelize.define('recursos', {
    idRecurso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: Sequelize.STRING,
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = {
    Recurso,
};
