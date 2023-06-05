import express from 'express';
import { router } from './routes';
import swaggerUi from "swagger-ui-express"

import swaggerFile from "./swagger.json"

const app = express();

//Configurando o middleware para analisar o corpo das requisições como JSON.
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

const port = 3333;
app.listen(port, () => console.log("server up"))