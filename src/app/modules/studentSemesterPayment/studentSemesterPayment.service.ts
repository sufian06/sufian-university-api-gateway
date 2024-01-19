import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-semester-payments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentSemesterPaymentService = {
  getAllFromDB
};
