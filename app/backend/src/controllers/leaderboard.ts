import { Request, Response, NextFunction } from 'express';

import { leaderHome } from '../services/leaderboard';

const home = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await leaderHome();
    if (!ranking) return res.status(404).json();
    return res.status(200).json(ranking);
  } catch (er) {
    return res.status(500).end();
  }
};

const away = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await leaderHome();
    if (!ranking) return res.status(404).json();
    return res.status(200).json(ranking);
  } catch (error) {
    return res.status(500).end();
  }
};

const leaderAll = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await leaderHome();
    if (!ranking) return res.status(404).json();
    return res.status(200).json(ranking);
  } catch (e) {
    return res.status(500).end();
  }
};

export {
  away,
  home,
  leaderAll,
};
