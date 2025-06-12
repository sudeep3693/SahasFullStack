// routes/auth.js
import { Router } from 'express';
import mongoose from 'mongoose';
import Credintal from '../Model/Credintals.js';
import InstitutionalDetail from '../Model/InstitutionalProfile.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
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


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/carousel'),
  filename: (req, file, cb) => {
    const uploadDir = 'uploads/carousel/';
    const finalName = `${Date.now()}-${file.originalname}`;

    // Check if file exists and delete it
    const filePath = path.join(uploadDir, finalName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    cb(null, finalName);
  },
});


const upload = multer({ storage });

router.post('/carousel', upload.array('images'), (req, res) => {
  try {
    const files = req.files;
    const descriptions = Array.isArray(req.body.descriptions)
      ? req.body.descriptions
      : [req.body.descriptions];

    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    console.log('Descriptions:', descriptions);
    console.log('Files:', files.map(f => f.filename));

    return res.status(200).json({ message: 'Images updated successfully' });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed on server' });
  }
});

router.get('/carousel', (req, res) => {
  fs.readdir('./uploads/carousel', (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    console.log("successfully fetched carousel images");
    res.status(200).json(files); // send filenames
  });
});

// DELETE an image
router.delete('/carousel/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('./uploads/carousel', filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return res.status(200).json({ message: 'Image deleted' });
  } else {
    return res.status(404).json({ error: 'File not found' });
  }
});



export default router;
