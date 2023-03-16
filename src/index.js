import { app } from "./app.js";
import {
    IP_SERVER,
    PORT_SERVER,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} from "./constants.js";
import mongoose from "mongoose";

const mongodbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`;
const mongodbLocal = "mongodb://localhost/cadastro-geral";

mongoose.connect(mongodbUrl).then((res,err) => {
    if (err) {
        throw err
        return;
    };

    app.listen("3333", () => {
        console.log("API REST CADASTRO GERAL");
        console.log(`SERVIDOR ESTÁ RODANDO EM http://${IP_SERVER}:${PORT_SERVER}`);
        console.log('Banco de dados está conectado com sucesso.')
    });
});
