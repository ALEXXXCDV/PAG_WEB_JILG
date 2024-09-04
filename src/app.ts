import express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/db_connect";
import { createNino } from "./controllers/controller_nino";

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const objectNinoRoute = Router();

app.use(express.json());

objectNinoRoute.post('/create_informacion_nino', createNino);
app.use(objectNinoRoute);

/*app.get('/', async (req, res)=>{
    const query = 'select * from informacion_nino;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola Mundo, el Servidor está en el puerto 3000. --- Alejandro Cadavid')
});*/

app.listen(port, ()=>{
    return console.log(`Example app listening on port ${port}`)
});