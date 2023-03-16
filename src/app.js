import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import { userRoutes } from "./routes/auth.js";

const app = express();

// Configuração do BodyParser
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

// Configuração da pasta static
app.use(express.static("uploads"));

// Configuração do CORS
app.use(cors());

// Configuração do Morgan
app.use(morgan("dev"));

// Configuração de rotas
app.use("/api/v1", userRoutes);

export { app };
