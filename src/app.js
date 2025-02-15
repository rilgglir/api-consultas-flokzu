import express from 'express';
import docsRoutes from './routes/docs.routes.js';
import postalRoutes from './routes/postal.routes.js';
import indexRoutes from './routes/index.routes.js';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const validApiKeys = ['be517257-2017-4b07-97e3-ad733ac27bf6','1d58dd1e-b82b-48cb-8608-9c6a6192884e', '3f97220e-8c31-42aa-8735-f2c6fe7c3c06'];


const limiter = rateLimit({

    windowMs: 10 * 60 * 1000, // ventana de tiempo de 10 minutos
    max : 200, // límite de 200 solicitudes por periodo
    message: 'Demasiadas solicitudes desde esta IP, por favor inténtelo de nuevo después'
});

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (validApiKeys.includes(apiKey)) {
        next();
    } else {
        res.status(403).json({ message: 'API Key inválida o no proporcionada' });
    }
};

app.use('/api',cors());
app.use('/api',apiKeyMiddleware);
app.use('/api',limiter);
app.use('/api',docsRoutes);
app.use('/api',indexRoutes);
app.use('/api',postalRoutes);


app.use((req,res, next) => {
    res.status(404).json({
        message: "endpoint no encontrado"
    })
})

export default app;