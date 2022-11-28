import express from "express";
import * as dotenv from "dotenv";

//Habilitar o server para ter variaveis de ambiente
dotenv.config()

//Instanciar o express
const app = express()

//Configurar Server Express para funcionar com JSON
app.use(express.json())

app.get("/", (req, res) => {

    const welcome = "Bem vendo ao express"

    return res.status(200).json(welcome)
})

app.listen(process.env.PORT, () => {
    console.log(`App Up and running on port http://localhost:${process.env.PORT}`);
})