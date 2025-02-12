import { pool } from '../db.js';

export const getDocs = async(req, res) => {
  
    try{
        const { matricula } = req.params;
        const result = await pool.query('SELECT estatus, estatus_titulacion, estatus_expediente_fisico, estatus_expediente_digital FROM base_correspondencia WHERE MATRICULA = $1', [matricula]);
        
        if (result.rows.length <= 0) {

            return res.status(404).json({
                message: 'No se encontró la matrícula'
            });
            
        }
        console.log(result.rows);
        
        res.json(result.rows);  

    }catch (error){
        console.error(error);
        return res.status(500).json({
            message : "Algo malo ocurrio"
        })
    }
};