import { shorten,decriptUrl } from '../controller/UrlEncodeController';
import express from "express"
export const router = express.Router();


router.post('/cutmyurl',shorten)
router.get('/:hashUrl',decriptUrl)