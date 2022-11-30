const usersRouter = require('./user/user.routes');
const recursoRouter = require('./recurso/recurso.routes');

const express = require('express');
const indexRoutes = express.Router();

indexRoutes.use('/users', usersRouter);
indexRoutes.use('/recurso', recursoRouter);

module.exports = indexRoutes;
