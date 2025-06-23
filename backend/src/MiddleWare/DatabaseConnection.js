import mongoose from 'mongoose';
const DBConnect = (req, res, next) =>{

    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Error while connecting to database:', err));
    
    next();
}
// 'mongodb://localhost:27017/Sahas'

export default DBConnect;