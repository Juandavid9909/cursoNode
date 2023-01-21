const { response } = require("express");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = (req, res = response) => {
    const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = async(req, res = response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        return res.status(400).json({
            msg: "Ese correo ya está registrado"
        });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    res.json({
        msg: "post API - controlador",
        usuario
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: "put API - controlador",
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};