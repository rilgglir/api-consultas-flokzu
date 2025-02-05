import express from 'express';
import docsRoutes from './routes/docs.routes.js';
import postalRoutes from './routes/postal.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use('/api',docsRoutes);
app.use('/api',indexRoutes);
app.use('/api',postalRoutes);

app.use((req,res, next) => {
    res.status(404).json({
        message: "endpoint no encontrado"
    })
})

export default app;