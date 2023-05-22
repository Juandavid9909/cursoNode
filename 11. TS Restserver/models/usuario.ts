import { DataTypes } from "sequelize";

import db from "../db/connection";

const Usuario = db.define("usuario", {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;