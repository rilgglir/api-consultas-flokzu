import { pool } from '../db.js';

export const getPostal = async(req, res) => {
  
    try{

        const [rows] = await pool.query('SELECT * FROM postal WHERE Codigo_Postal = ?', [req.params.cp]);
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'No se encontró el codigo postal'
        });
        
        console.log(rows);
        
        res.json(rows[0]);  

    }catch (error){
        
        return res.status(500).json({
            message : "Algo malo ocurrio"
        })
    }
};