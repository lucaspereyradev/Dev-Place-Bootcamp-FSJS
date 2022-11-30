const express = require('express');
const recursos = express.Router();
const controller = require('../../controllers/recursoController');

recursos.get('/', controller.getRecurso);
recursos.post('/', controller.createRecurso);
recursos.get('/:id', controller.getByIdRecurso);

module.exports = recursos;
