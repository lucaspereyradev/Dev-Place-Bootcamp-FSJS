var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');

var Usuario = sequelize.define(
    'usuarios',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Must be a valid email address',
                },
            },
        },
        password: Sequelize.STRING,
        rol: {
            type: Sequelize.BOOLEAN,
            defaultValue: false, // false = común, true = premium.
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        indexes: [
            {
                fields: ['email'],
                unique: true,
            },
        ],
        defaultScope: {
            attributes: {
                exclude: ['password'],
            },
        },
    }
);

module.exports = {
    Usuario,
};
