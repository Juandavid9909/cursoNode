import { Sequelize } from "sequelize";

const db = new Sequelize("curso_node", "root", "", {
    host: "192.168.64.2",
    dialect: "mysql",
    // logging: false
});

export default db;