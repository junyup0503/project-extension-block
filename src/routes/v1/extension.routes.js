import express from 'express';
import catchAsync from '../../middlewares/catchAsync.middleware';
import extensionController from '../../controllers/extension.controller';
import validate from '../../middlewares/validate.middleware';
import {
  blockExtSchema,
  deleteExtSchema,
  checkExtSchema,
} from '../../validations/extension.validation';

const { findExt, checkExt, blockExt, deleteExt } = extensionController;

const router = express.Router();

router.get('/', catchAsync(findExt));
router.post('/check-fixed', validate(checkExtSchema), catchAsync(checkExt));
router.post('/block-custom', validate(blockExtSchema), catchAsync(blockExt));
router.delete(
  '/block-custom/:extNo',
  validate(deleteExtSchema),
  catchAsync(deleteExt),
);

export default router;
