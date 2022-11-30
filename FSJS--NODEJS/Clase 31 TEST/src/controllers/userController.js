const { Usuario } = require('../models/user.model');
const bcrypt = require('bcrypt');
const { json } = require('body-parser');
const userController = {};

userController.getUser = async (req, res) => {
    const response = await Usuario.findAll()
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

userController.createUser = async (req, res) => {
    try {
        const modelData = {
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol,
        };
        const response = await Usuario.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: 'User Created' };
                return res;
            })
            .catch((e) => {
                if (
                    e.name == 'SequelizeUniqueConstraintError' ||
                    e.name == 'SequelizeValidationError'
                ) {
                    return { error: true, message: e.errors.map((err) => err.message) };
                } else {
                    return { error: true, message: e };
                }
            });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
};

userController.getByIdUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Usuario.findAll({
            where: { id: id },
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

userController.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let modelData = {
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol,
        };
        if (req.body.password) {
            modelData = { ...modelData, ...{ password: bcrypt.hashSync(req.body.password, 10) } };
        }
        const response = await User.update(modelData, {
            where: { id: id },
        })
            .then((data) => {
                const res = { error: false, data: data, message: 'User Updated' };
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

userController.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Usuario.destroy({
            where: { id: id },
        })
            .then((data) => {
                const res = { error: false, data: data, message: 'Deleted Successful' };
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

module.exports = userController;
