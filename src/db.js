import pg from "pg";
const { Pool } = pg;

import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} from './config.js';

export const pool = new pg.Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});



/*Inicialmente se usaba mysql, pero se cambió a postgresql

import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})


//Conexion de pruebas sin datos de estudiante
import {
    DATABASE_URL
} from './config.js';

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

*/
