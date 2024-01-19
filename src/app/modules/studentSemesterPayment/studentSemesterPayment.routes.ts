import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/', StudentSemesterPaymentController.getAllFromDB);

export const studentSemesterPaymentRoutes = router;
