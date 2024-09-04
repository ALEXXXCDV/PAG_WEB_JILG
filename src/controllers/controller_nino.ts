import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request, Response } from "express";

/** Create Object NINO
 * @param req
 * @param res
 * @returns Object NINO
 */
export const createNino = async (req: Request, res: Response): Promise<Response> => {
    const {nombre_completo, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, fecha_registro} = req.body;

    if (nombre_completo !== null && fecha_nacimiento !== null && genero !== null && lugar_nacimiento !== null && numero_identificacion !== null /*&& experiencia_previa !== null && expectativas_padres !== null */ && fecha_registro !== null) {
        try {
            await pool.query('INSERT INTO informacion_nino (nombre_completo, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, fecha_registro) values ($1,$2,$3,$4,$5,$6,$7,$8)', [nombre_completo, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, fecha_registro]);
            return res.status(201).json({
                message: 'Object NINO created successfuly',
                informacion_nino:{
                    nombre_completo, 
                    fecha_nacimiento, 
                    genero, 
                    lugar_nacimiento, 
                    numero_identificacion,
                    experiencia_previa,
                    expectativas_padres,
                    fecha_registro
                }
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Errores');
        }
    } else {
        return res.status(500).json('Internal Server Error!!!');
    }
};


/*insert into informacion_nino (nombre_completo, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, espectativas_padres, fecha_registro) values ('Juan', '2007-06-23', 'M', 'Bogotá', '1025534821', 'Ninguna', 'Hábitos y lectura', now());*/
