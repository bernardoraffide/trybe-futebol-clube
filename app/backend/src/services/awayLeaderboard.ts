import {
  calculatePoints,
  calculateVictories,
  calculateLosses,
  calculateDraw,
  calcularGolsFavor,
  calcularGolsContra,
  calculateTotalScore,
  calculateVictoriesPercentage,
} from '../middlewares/awayLeaderboard';

import getAllTeams from './teams';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { IAwayMatch } from '../interfaces';

const getAllAwayTeamMatches = async () => {
  const result = await Matches.findAll({
    where: {
      inProgress: false,
    },
    include: [
      {
        model: Teams,
        as: 'teamAway',
        attributes: {
          exclude: ['id'],
        },
      },
    ],
  });
  return result as unknown as IAwayMatch[];
};

const leaderboardAway = async () => {
  const awayTeams = await getAllTeams();
  const awayTeamMatches = await getAllAwayTeamMatches();
  const matchMap = awayTeams.map((e) => {
    const away = awayTeamMatches.filter((match) => match.teamAway.teamName === e.teamName);
    return {
      name: e.teamName,
      totalPoints: calculatePoints(away),
      totalGames: away.length,
      totalVictories: calculateVictories(away),
      totalDraws: calculateDraw(away),
      totalLosses: calculateLosses(away),
      goalsFavor: calcularGolsFavor(away),
      goalsOwn: calcularGolsContra(away),
      goalsBalance: calculateTotalScore(away),
      efficiency: calculateVictoriesPercentage(away),
    };
  });
  return matchMap;
};

const sortLeaderboardAway = async () => {
  const leader = await leaderboardAway();
  const result = leader.sort(
    (a, b) =>
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn,
  );
  return result;
};

export {
  getAllAwayTeamMatches,
  leaderboardAway,
  sortLeaderboardAway,
};
