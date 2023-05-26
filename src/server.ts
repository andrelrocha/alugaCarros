import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

//Configurando o middleware para analisar o corpo das requisições como JSON.
app.use(express.json())

app.use("/categories", categoriesRoutes)

const port = 3333;
app.listen(port, () => console.log("server up"))