import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hola Mundo, el Servidor está en el puerto 3000. --- Alejandro Cadavid')
});

app.listen(port, ()=>{
    return console.log(`Example app listening on port ${port}`)
});