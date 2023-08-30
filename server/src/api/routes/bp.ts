import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import BpService from '@/services/bp';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/bp', route);

  route.get('/', (req: Request, res: Response) => {
    BpService.addBp(1, 2, 3, new Date(), "1");
    return res.send("/bp works").status(200);
  });
};
