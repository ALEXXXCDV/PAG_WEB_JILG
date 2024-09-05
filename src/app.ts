import express, { Router } from "express";
import { createNino, deleteNino, getNino, updateNino } from "./controllers/controller_nino";
import { authenticateToken, generateToken } from "./controllers/controller_user";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const objectNinoRoute = Router();
const userRoutes = Router();

objectNinoRoute.post('/create_informacion_nino', authenticateToken, createNino);
objectNinoRoute.get('/get_informacion_nino', authenticateToken, getNino);
objectNinoRoute.delete('/delete_informacion_nino/:id', authenticateToken, deleteNino);
objectNinoRoute.put('/update_informacion_nino/:id', authenticateToken, updateNino);

userRoutes.post('/api/login', generateToken)

app.use(express.json());
app.use(objectNinoRoute);
app.use(userRoutes);

app.listen(port, ()=>{
    return console.log(`Example app listening on port ${port}`)
});

/*app.get('/', async (req, res)=>{
    const query = 'select * from informacion_nino;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola Mundo, el Servidor está en el puerto 3000. --- Alejandro Cadavid')
});*/