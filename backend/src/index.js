import express from 'express';
import LoginRoute from './Routes/LoginRoute.js';
import CorsMiddleware from './MiddleWare/CorsMiddleware.js';
import CarouselImageRoute from './Routes/CarouselImageRoute.js';
import FinancialRoute from './Routes/FinancialRoute.js';
import NoticeRoute from './Routes/NoticeRoute.js';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CorsMiddleware);
app.use('/uploads/carousel', express.static('uploads/carousel'));
app.use('/uploads/gallery', express.static('uploads/gallery'));
app.use('/uploads/notice',express.static('uploads/notice'));

app.use("/admin", LoginRoute);
app.use("/images", CarouselImageRoute);
app.use("/financial",FinancialRoute);
app.use("/notice", NoticeRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
