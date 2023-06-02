import express from 'express';
import { router } from './routes';

const app = express();

//Configurando o middleware para analisar o corpo das requisições como JSON.
app.use(express.json())

app.use(router)

const port = 3333;
app.listen(port, () => console.log("server up"))