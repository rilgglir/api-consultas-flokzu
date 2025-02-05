import { pool } from '../db.js';

export const getDocs = async(req, res) => {
  
    try{

        const [rows] = await pool.query('SELECT * FROM base_correspondencia WHERE MATRICULA = ?', [req.params.matricula]);
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'No se encontró la matrícula'
        });
        
        console.log(rows);
        
        res.json(rows[0]);  

    }catch (error){
        
        return res.status(500).json({
            message : "Algo malo ocurrio"
        })
    }
};