import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'Procesos25';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Procesos2025';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DATABASE || 'consultas_flokzu';
export const DB_PORT = process.env.DB_PORT || '3007';
