import { pool } from '../db.js';

export const getPing = async(req, res) => {

    try{
        
        const result = await pool.query('SELECT 1 + 1 AS result');
        console.log(result);
        res.json(result);

    }catch (error){
        
        return res.status(500).json({
            message : "Algo malo ocurrio"
        })
    }

};