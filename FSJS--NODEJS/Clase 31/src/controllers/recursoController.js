const { Recurso } = require('../models/recurso.model');
const recursoController = {};

recursoController.getRecurso = async (req, res) => {
    const response = await Recurso.findAll()
        .then((data) => {
            const res = { error: false, data: data };
            return res;
        })
        .catch((error) => {
            const res = { error: true, message: error };
            return res;
        });
    res.json(response);
};

recursoController.createRecurso = async (req, res) => {
    try {
        const modelData = {
            message: req.body.message,
        };
        const response = await Recurso.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: 'Recurso created' };
                return res;
            })
            .catch((error) => {
                const res = { error: true, message: error };
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
};

recursoController.getByIdRecurso = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Recurso.findAll({
            where: { idRecurso: id },
        })
            .then((data) => {
                const res = { error: false, data: data };
                return res;
            })
            .catch((error) => {
                const res = { error: true, message: error };
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
};

module.exports = recursoController;
