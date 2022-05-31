import { ICreatedMatch } from '../interfaces';
import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

const getMatchByProgress = async (progress: string) => {
  const inProgress = await Matches.findAll({
    where: { inProgress: progress === 'false' ? '0' : '1' },
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ],
  });

  return inProgress;
};

const compareAndCreateMatch = async (match: ICreatedMatch) => {
  const { homeTeam, awayTeam } = match;

  if (homeTeam && awayTeam && homeTeam === awayTeam) {
    return 'Equal Teams';
  }

  const newMatch = await Matches.create(match);

  return newMatch;
};

export { getMatchByProgress, compareAndCreateMatch };
