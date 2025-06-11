// routes/auth.js
import { request, Router } from 'express';
import mongoose from 'mongoose';
import Credintal from '../Model/Credintals.js';
import InstitutionalDetail from '../Model/InstitutionalProfile.js';

mongoose.connect('mongodb://localhost:27017/Sahas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error('Error while connecting to database:', err));

const router = Router();

router.post('/login', async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await Credintal.findOne({ username, password });

    if (user) {
      console.log("Successfully validated credentials");
      response.status(200).send("Credentials validated and logged in successfully");
    } else {
      response.status(401).send("Invalid username or password");
    }
  } catch (err) {
    console.error("Error while retrieving the data:", err);
    response.status(500).send("Internal Server Error");
  }
});


router.post('/institutional/add', async (request, response) => {
  try {
    console.log("Received data for institutional profile");

    const existing = await InstitutionalDetail.findOne();

    if (existing) {
      // Update the existing document
      await InstitutionalDetail.updateOne(
        { _id: existing._id },
        { $set: request.body }
      );
      response.status(200).json({ message: "Institutional details updated" });
      console.log("Institutional data updated successfully");
    } else {
      // Create a new document
      const newRecord = new InstitutionalDetail(request.body);
      await newRecord.save();
      response.status(201).json({ message: "Institutional details created" });
      console.log("Institutional data created successfully");
    }

  } catch (err) {
    console.error("Error saving institutional details:", err);
    response.status(500).json({ error: "Failed to save data" });
  }
});


router.get('/institutional/getAll', async (request,response)=>{

  try{
    console.log("getting institutional data");
    const record = await InstitutionalDetail.find();
    response.status(200).json(record);
  }
  catch (err){

    console.log("error while retriving data");
    response.status(500).json({error: "error while retriving data"});

  }
})


export default router;
