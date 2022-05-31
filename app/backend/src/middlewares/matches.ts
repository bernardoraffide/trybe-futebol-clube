import { Request, Response, NextFunction } from 'express';
import Teams from '../database/models/TeamsModel';

const validateMatchCreation = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const compareHomeTeam = await Teams.findByPk(homeTeam);
  const compareAwayTeam = await Teams.findByPk(awayTeam);

  if (!compareHomeTeam || !compareAwayTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default validateMatchCreation;
