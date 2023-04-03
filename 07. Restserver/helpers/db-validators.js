const { Categoria, Role, Usuario } = require("../models");

const esRoleValido = async(rol = "") => {
    const existeRol = await Role.findOne({ rol });

    if (!existeRol) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async(correo = "") => {
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        throw new Error(`El correo: ${ correo } ya está registrado`);
    }
}

const existeUsuarioPorId = async(_id = "") => {
    const existeUsuario = await Usuario.findById({ _id });

    if (!existeUsuario) {
        throw new Error(`El id no existe ${ _id }`);
    }
}

const existeCategoriaPorId = async(_id = "") => {
    const existeCategoria = await Categoria.findById({ _id });

    if (!existeCategoria) {
        throw new Error(`El id no existe ${ _id }`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId
}