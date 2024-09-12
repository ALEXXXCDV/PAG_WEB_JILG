import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request, Response } from "express";

/** Create Object NINO
 * @param req
 * @param res
 * @returns Json Object NINO
 */
export const createNino = async (req: Request, res: Response): Promise<Response> => {

    const {nombre_completo_nino, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, nombre_padre,ocupacion_padre, lugar_trabajo_padre,  telefono_trabajo_padre, nombre_madre, ocupacion_madre, lugar_trabajo_madre, telefono_trabajo_madre,  direccion_completa, telefono_emergencia, correo_electronico, estado_civil_padres, personas_autorizadas,documento_personas_autorizadas, consentimiento_medico, alergias, condiciones_medicas, vacunas_al_dia,medicamentos, seguro_medico, rh_nino, preferencias_alimenticias, habitos_sueno,necesidades_especiales, intereses, socializacion, metodos_disciplina, autorizacion_salidas,autorizacion_fotos_videos,autorizacion_actividades, fecha_de_registro} = req.body;

    if (nombre_completo_nino !== null && fecha_nacimiento !== null && genero !== null && lugar_nacimiento !== null && numero_identificacion !== null && experiencia_previa !== null && expectativas_padres !== null && nombre_padre !== null && ocupacion_padre!== null && lugar_trabajo_padre!== null &&  telefono_trabajo_padre!== null && nombre_madre!== null && ocupacion_madre!== null && lugar_trabajo_madre!== null && telefono_trabajo_madre !== null && direccion_completa!== null && telefono_emergencia!== null && correo_electronico !== null && estado_civil_padres !== null && personas_autorizadas !== null &&documento_personas_autorizadas !== null && consentimiento_medico !== null && alergias !== null && condiciones_medicas!== null && vacunas_al_dia !== null && medicamentos !== null && seguro_medico !== null && rh_nino !== null && preferencias_alimenticias!== null && habitos_sueno !== null && necesidades_especiales !== null && intereses !== null && socializacion !== null && metodos_disciplina !== null && autorizacion_salidas !== null && autorizacion_fotos_videos !== null && autorizacion_actividades && fecha_de_registro !== null) {
        try {
            await pool.query('INSERT INTO informacion_nino (nombre_completo_nino, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, nombre_padre,ocupacion_padre, lugar_trabajo_padre,  telefono_trabajo_padre, nombre_madre, ocupacion_madre, lugar_trabajo_madre, telefono_trabajo_madre,  direccion_completa, telefono_emergencia, correo_electronico, estado_civil_padres, personas_autorizadas,documento_personas_autorizadas, consentimiento_medico, alergias, condiciones_medicas, vacunas_al_dia, medicamentos, seguro_medico, rh_nino, preferencias_alimenticias, habitos_sueno,necesidades_especiales, intereses, socializacion, metodos_disciplina, autorizacion_salidas,autorizacion_fotos_videos,autorizacion_actividades, fecha_de_registro) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,now())', [nombre_completo_nino, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, nombre_padre,ocupacion_padre, lugar_trabajo_padre,  telefono_trabajo_padre, nombre_madre, ocupacion_madre, lugar_trabajo_madre, telefono_trabajo_madre,  direccion_completa, telefono_emergencia, correo_electronico, estado_civil_padres, personas_autorizadas,documento_personas_autorizadas, consentimiento_medico, alergias, condiciones_medicas, vacunas_al_dia,medicamentos, seguro_medico, rh_nino, preferencias_alimenticias, habitos_sueno,necesidades_especiales, intereses, socializacion, metodos_disciplina, autorizacion_salidas,autorizacion_fotos_videos,autorizacion_actividades]);
            return res.status(201).json({
                message: 'Object NINO created successfuly',
                informacion_nino:{
                    nombre_completo_nino, 
                    fecha_nacimiento, 
                    genero, 
                    lugar_nacimiento, 
                    numero_identificacion,
                    fecha_de_registro
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

/**
 * Function GET Object NINO
 * @param require
 * @param response
 * return Table informacion_nino
 */
export const getNino = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM informacion_nino;');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(console);
        return res.status(500).json('Internal Error Server');
    }
}



/**
 * Function for eliminate a Object NINO
 * @param req 
 * @param res 
 * @returns Message Successfuly Json
 */
export const deleteNino = async (req: Request, res: Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    try {
        await pool.query('DELETE FROM informacion_nino WHERE id = $1', [id]);
        return res.status(200).json(`El Object NINO whit this ${id} was deleted successfuly`)
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}

/**
 * UPDATE OBJECT NINO FUNCTION 
 * @param req
 * @param res
 */

export const updateNino = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const {nombre_completo_nino, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, nombre_padre,ocupacion_padre, lugar_trabajo_padre,  telefono_trabajo_padre, nombre_madre, ocupacion_madre, lugar_trabajo_madre, telefono_trabajo_madre,  direccion_completa, telefono_emergencia, correo_electronico, estado_civil_padres, personas_autorizadas,documento_personas_autorizadas, consentimiento_medico, alergias, condiciones_medicas, vacunas_al_dia,medicamentos, seguro_medico, rh_nino, preferencias_alimenticias, habitos_sueno,necesidades_especiales, intereses, socializacion, metodos_disciplina, autorizacion_salidas,autorizacion_fotos_videos,autorizacion_actividades, fecha_de_registro} = req.body;
    
    if (nombre_completo_nino !== null && fecha_nacimiento !== null && genero !== null && lugar_nacimiento !== null && numero_identificacion !== null && experiencia_previa !== null && expectativas_padres !== null && nombre_padre !== null && ocupacion_padre!== null && lugar_trabajo_padre!== null &&  telefono_trabajo_padre!== null && nombre_madre!== null && ocupacion_madre!== null && lugar_trabajo_madre!== null && telefono_trabajo_madre !== null && direccion_completa!== null && telefono_emergencia!== null && correo_electronico !== null && estado_civil_padres !== null && personas_autorizadas !== null &&documento_personas_autorizadas !== null && consentimiento_medico !== null && alergias !== null && condiciones_medicas!== null && vacunas_al_dia !== null && medicamentos !== null && seguro_medico !== null && rh_nino !== null && preferencias_alimenticias!== null && habitos_sueno !== null && necesidades_especiales !== null && intereses !== null && socializacion !== null && metodos_disciplina !== null && autorizacion_salidas !== null && autorizacion_fotos_videos !== null && autorizacion_actividades && fecha_de_registro !== null) {
        try {
            await pool.query('UPDATE informacion_nino SET nombre_completo_nino = $1, fecha_nacimiento = $2, genero = $3, lugar_nacimiento = $4, numero_identificacion = $5, experiencia_previa = $6, expectativas_padres = $7, nombre_padre =$8, ocupacion_padre = $9, lugar_trabajo_padre = $10,  telefono_trabajo_padre = $11, nombre_madre = $12, ocupacion_madre = $13, lugar_trabajo_madre = $14, telefono_trabajo_madre = $15,  direccion_completa = $16, telefono_emergencia = $17, correo_electronico = $18, estado_civil_padres = $19, personas_autorizadas = $20,documento_personas_autorizadas = $21, consentimiento_medico = $22, alergias = $23, condiciones_medicas = $24, vacunas_al_dia = $25, medicamentos = $26, seguro_medico = $27, rh_nino = $28, preferencias_alimenticias = $29, habitos_sueno = $30, necesidades_especiales = $31, intereses = $32, socializacion =$33, metodos_disciplina = $34, autorizacion_salidas = $35,autorizacion_fotos_videos = $36, autorizacion_actividades = $37 where id = $38 ' , [nombre_completo_nino, fecha_nacimiento, genero, lugar_nacimiento, numero_identificacion, experiencia_previa, expectativas_padres, nombre_padre,ocupacion_padre, lugar_trabajo_padre,  telefono_trabajo_padre, nombre_madre, ocupacion_madre, lugar_trabajo_madre, telefono_trabajo_madre,  direccion_completa, telefono_emergencia, correo_electronico, estado_civil_padres, personas_autorizadas,documento_personas_autorizadas, consentimiento_medico, alergias, condiciones_medicas, vacunas_al_dia,medicamentos, seguro_medico, rh_nino, preferencias_alimenticias, habitos_sueno,necesidades_especiales, intereses, socializacion, metodos_disciplina, autorizacion_salidas,autorizacion_fotos_videos,autorizacion_actividades, id]);
            return res.json({
                message: 'update successfuly Object NINO',
                informacion_nino:{
                    nombre_completo_nino, 
                    fecha_nacimiento, 
                    genero, 
                    lugar_nacimiento, 
                    numero_identificacion,
                    fecha_de_registro
                },
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Errores');
        }
    } else {
        return res.status(500).json('Internal Server Error!!!');
    }
};
