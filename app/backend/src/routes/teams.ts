import { Router } from 'express';
import { getAllTeams, getTeamById } from '../controllers/teams';

const teamsRouter = Router();

teamsRouter.get('/', getAllTeams);
teamsRouter.get('/:id', getTeamById);

export default teamsRouter;
