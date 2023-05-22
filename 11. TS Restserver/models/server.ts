import express, { Application } from "express";
import cors from "cors";

import userRoutes from "../routes/usuario";
import db from "../db/connection";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: "/api/usuarios"
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Base de datos online");
        } catch (error) {
            console.log(error);
            throw new Error("Ocurrió un error conectando a la BD");
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}

export default Server;