import express, { Router } from 'express'
import { handleGenerateShortUrl } from '../controllers/handleGenerateShortUrl';
const router = express.Router();

router.post('/api/generate', handleGenerateShortUrl);

export {router}