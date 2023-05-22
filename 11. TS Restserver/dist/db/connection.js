"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("curso_node", "root", "", {
    host: "192.168.64.2",
    dialect: "mysql",
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map