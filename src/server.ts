import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "tudo certo!" })
})

const port = 3333;
app.listen(port)