import { pool } from '../db.js';

export const getPing = async(req, res) => {

    try{
        
        const result = 'Prueba correcta';
        res.json(result);

    }catch (error){
        
        return res.status(500).json({
            message : "Algo malo ocurrio"
        })
    }

};