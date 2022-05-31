import { Request, Response } from 'express';
import Teams from '../database/models/TeamsModel';

const getAllTeams = async (_req: Request, res: Response) => {
  try {
    const teams = await Teams.findAll();
    return res.status(200).json(teams);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

const getTeamById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await Teams.findByPk(id);
    return res.status(200).json(team);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export { getAllTeams, getTeamById };
