import { Router } from 'express';
import validateMatchCreation from '../middlewares/matches';
import { validateToken } from '../middlewares/jwt';
import {
  createMatch,
  editMatch,
  finishMatch,
  getAllMatches,
} from '../controllers/matches';

const matchesRouter = Router();

matchesRouter.get('/', getAllMatches);
matchesRouter.post('/', validateToken, validateMatchCreation, createMatch);

matchesRouter.patch('/:id/finish', finishMatch);

matchesRouter.patch('/:id', editMatch);

export default matchesRouter;
