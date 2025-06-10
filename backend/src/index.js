import express from 'express';
import AdminRouter from './Routes/AdminRoute.js';  // Make sure path is correct
import CorsMiddleware from './MiddleWare/CorsMiddleware.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CorsMiddleware);
app.use("/admin", AdminRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
