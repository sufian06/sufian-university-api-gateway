import { NextFunction, Request, Response } from 'express';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';
import sendResponse from '../../../shared/response';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentController = {
  getAllFromDB
};
