import { Router } from 'express';
import mongoose from 'mongoose';
import BasicDetails from '../Model/BasicDetails.js'; // model name should match export

const router = Router();

mongoose.connect('mongodb://localhost:27017/Sahas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error('Error while connecting to database:', err));

router.post("/basicDetails", async (request, response) => {
  try {
    const filter = {}; // since there's only one record expected
    const update = request.body;
    const options = { new: true, upsert: true }; // upsert = create if not found

    const updatedData = await BasicDetails.findOneAndUpdate(filter, update, options);

    console.log("Upserted Record:", updatedData);
    response.status(200).json({
      message: "Data saved or updated successfully",
      data: updatedData
    });
  } catch (error) {
    console.error("Error saving/updating DB:", error);
    response.status(500).json({ error: "Server error" });
  }
});

router.get("/getBasicDetails", async (request,response)=>{
  try{
    const data = await BasicDetails.find();
    console.log("data received :",data);
    response.status(200).json(data);
  }
  catch(error){
console.error("Error retriving record: ", error);
    response.status(500).json({ error: "Server error" });

  }
})


export default router;
