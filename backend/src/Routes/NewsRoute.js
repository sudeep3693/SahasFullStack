import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import NewsModel from '../Model/NewsModel.js';
import DBConnect from '../MiddleWare/DatabaseConnection.js';

const router = Router();
router.use(DBConnect);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/news'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

/**
 * @desc Save new team detail with image
 * @route POST /teamDetail/save/:type
 */
router.post('/save', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'Image is required' });

    const newsModel = new NewsModel({
      imageName: req.file.filename,
      date: req.body.date,
      heading: req.body.heading,
      newsDescription: req.body.detail,
    });

    await newsModel.save();
    res.status(201).json({ message: 'Successfully saved news data', newsModel });
  } catch (error) {
    console.error('Error saving team detail:', error);
    res.status(500).json({ message: 'Server error while saving news detail', error });
  }
});

/**
 * @desc Get all team details
 * @route GET /teamDetail/all
 */
router.get('/all', async (req, res) => {
  try {
    const newsModel = await NewsModel.find();
    res.status(200).json(newsModel);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news details', error });
  }
});



/**
 * @desc Delete team detail by ID and remove image
 * @route DELETE /teamDetail/delete/:id
 */
router.delete('/delete/:id', async (req, res) => {
  try {
    const { imageName } = req.body;
    const filePath = path.join(path.resolve(), 'uploads/news', imageName);

    await NewsModel.findByIdAndDelete(req.params.id);

    // Attempt to delete image file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting news detail:', error);
    res.status(500).json({ message: 'Failed to delete' });
  }
});

export default router;
