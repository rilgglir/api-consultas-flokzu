import { pool } from '../db.js';

export const getPostal = async (req, res) => {

    try {
        const  cp  = req.params.cp;
        const result = await pool.query('SELECT * FROM postal WHERE Codigo_Postal = $1', [cp]);
        
        if (result.rows.length <= 0) {
            return res.status(404).json({
                message: 'No se encontró el código postal'
            });
        }
        
        console.log(result.rows);
        
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Algo malo ocurrió"
        });
    }
};