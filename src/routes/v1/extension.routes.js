import express from 'express';
import catchAsync from '../../middlewares/catchAsync.middleware';
import extensionController from '../../controllers/extension.controller';

const { findExt, checkExt, blockExt, deleteExt } = extensionController;

const router = express.Router();

router.get('/', catchAsync(findExt));
router.post('/check-fixed', catchAsync(checkExt));
router.post('/block-custom', catchAsync(blockExt));
router.delete('/block-custom/:extNo', catchAsync(deleteExt));

export default router;
