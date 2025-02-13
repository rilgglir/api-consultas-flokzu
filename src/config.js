import { config } from "dotenv";
import http from "http";

config();



export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DATABASE || 'consultas_flokzu';
export const DB_USER = process.env.DB_USER || 'procesos25';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'procesos2025';
export const DB_PORT = process.env.DB_PORT || '5432';
export const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://procesos25:procesos2025@localhost:5432/consultas_flokzu';