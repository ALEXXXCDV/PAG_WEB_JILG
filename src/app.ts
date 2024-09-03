import express from "express";
import pool from "./database/db_connect";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', async (req, res)=>{
    const query = 'select * from informacion_nino;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola Mundo, el Servidor está en el puerto 3000. --- Alejandro Cadavid')
});

app.listen(port, ()=>{
    return console.log(`Example app listening on port ${port}`)
});