const { response } = require("express");
const { ObjectId } = require("mongoose").Types;

const { Usuario } = require("../models");

const coleccionesPermitidas = [
    "categorias",
    "productos",
    "roles",
    "usuarios"
];

const buscarUsuarios = async(termino = "", res = response) => {
    const esMongoID = ObjectId.isValid(termino);

    if (esMongoID) {
        const usuario = await Usuario.findById(termino);

        res.json({
            results: usuario ? [usuario] : []
        });
    }
};

const buscar = (req, res = response) => {
    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${ coleccionesPermitidas }`
        });
    }

    switch (coleccion) {
        case "categorias":
            break;

        case "productos":
            break;

        case "usuarios":
            buscarUsuarios(termino, res);
            break;

        default:
            res.status(500).json({
                msg: "Se le olvidó hacer esta búsqueda"
            });
            break;
    }
}

module.exports = {
    buscar
}