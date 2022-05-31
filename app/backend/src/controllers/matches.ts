import { Request, Response } from 'express';
import { getMatchByProgress, compareAndCreateMatch } from '../services/matches';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

const getAllMatches = async (req: Request, res: Response) => {
  try {
    const progress = req.query.inProgress;

    if (progress !== undefined) {
      const inProgress = progress.toString();
      const matches = await getMatchByProgress(inProgress);
      console.log(matches);

      return res.status(200).json(matches);
    }

    const allMatches = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return res.status(200).json(allMatches);
  } catch (e) {
    return res.status(500).json(e);
  }
};

const createMatch = async (req: Request, res: Response) => {
  const match = req.body;
  const newMatch = await compareAndCreateMatch(match);

  if (!newMatch) { return res.status(404).json({ message: 'There is no team with such id!' }); }

  if (newMatch === 'Equal Teams') {
    return res
      .status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  return res.status(201).json(newMatch);
};

const finishMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const [editedMatch] = await Matches.update(
    { inProgress: 0 },
    { where: { id: Number(id) } },
  );

  if (!editedMatch) {
    return res.status(500).json({ message: 'somethings wrong' });
  }

  return res.status(200).json({ message: 'Finished' });
};

const editMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const [updatedMatch] = await Matches.update(
    { homeTeamGoals: Number(homeTeamGoals), awayTeamGoals: Number(awayTeamGoals) },
    { where: { id: Number(id) } },
  );
  return res.status(200).json(updatedMatch);
};

export { getAllMatches, createMatch, finishMatch, editMatch };
