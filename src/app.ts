import express from "express";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Hola Mundo, el Servidor está en el puerto 3000. --- Alejandro Cadavid')
});

app.listen(port, ()=>{
    return console.log(`Example app listening on port ${port}`)
});