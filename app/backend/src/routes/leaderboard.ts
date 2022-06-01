import { Router } from 'express';
import { leaderAll, away, home } from '../controllers/leaderboard';

const leaderboardRouter = Router();

leaderboardRouter.get('/', leaderAll);

leaderboardRouter.get('/home', home);

leaderboardRouter.get('/away', away);

export default leaderboardRouter;
