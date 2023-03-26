const validaCampos = require("./validar-campos");
const validaJWT = require("./validar-jwt");
const validaRoles = require("./validar-roles");

module.exports = {
    ...validaCampos,
    ...validaJWT,
    ...validaRoles
}