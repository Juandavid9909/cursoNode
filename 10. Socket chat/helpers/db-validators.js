const { Categoria, Role, Usuario, Producto } = require("../models");

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

const existeProductoPorId = async(_id = "") => {
    const existeProducto = await Producto.findById({ _id });

    if (!existeProducto) {
        throw new Error(`El id no existe ${ _id }`);
    }
}

const coleccionesPermitidas = (coleccion = "", colecciones = []) => {
    const incluida = colecciones.includes(coleccion);

    if (!incluida) {
        throw new Error(`La colección ${ coleccion } no es permitida - ${ colecciones }`);
    }

    return true;
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}