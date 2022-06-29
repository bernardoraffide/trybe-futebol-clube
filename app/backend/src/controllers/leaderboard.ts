import { Request, Response, NextFunction } from 'express';
import { sortLeaderboardHome } from '../services/homeLeaderboard';
import { sortLeaderboardAway } from '../services/awayLeaderboard';
import { sortLeaderboard } from '../services/leaderboard';

const home = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await sortLeaderboardHome();

    if (!ranking) return res.status(404).json();

    return res.status(200).json(ranking);
  } catch (e) {
    return res.status(500).end();
  }
};

const away = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await sortLeaderboardAway();

    if (!ranking) return res.status(404).json();

    return res.status(200).json(ranking);
  } catch (e) {
    return res.status(500).end();
  }
};

const leaderAll = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await sortLeaderboard();

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
