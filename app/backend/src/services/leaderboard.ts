import {
  calculatePoints,
  calculateVictories,
  calculateLosses,
  calculateDraw,
  calcularGolsFavor,
  calcularGolsContra,
  calculateTotalScore,
  calculateVictoriesPercentage,
  percentualEffi,
} from '../middlewares/homeLeaderboard';

import getAllTeams from './teams';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { IHomeMatch } from '../interfaces';

const getAllHomeTeamMatches = async () => {
  const result = await Matches.findAll({
    where: {
      inProgress: false,
    },
    include: [
      {
        model: Teams,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        },
      },
    ],
  });
  return result as unknown as IHomeMatch[];
};

const leaderboardHome = async () => {
  const homeTeams = await getAllTeams();
  const homeTeamMatches = await getAllHomeTeamMatches();
  const matchMap = homeTeams.map((e) => {
    const home = homeTeamMatches.filter((match) => match.teamHome.teamName === e.teamName);
    return {
      name: e.teamName,
      totalPoints: calculatePoints(home),
      totalGames: home.length,
      totalVictories: calculateVictories(home),
      totalDraws: calculateDraw(home),
      totalLosses: calculateLosses(home),
      goalsFavor: calcularGolsFavor(home),
      goalsOwn: calcularGolsContra(home),
      goalsBalance: calculateTotalScore(home),
      efficiency: calculateVictoriesPercentage(home),
    };
  });
  return matchMap;
};

const leaderHome = async () => {
  const leader = await leaderboardHome();
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

const winner = async () => {
  const home = await leaderboardHome();
  const away = await leaderboardHome();
  const result = home.filter((e, i) => home[i].name).map((element, index) => ({
    name: element.name,
    totalPoints: element.totalPoints + away[index].totalPoints,
    totalGames: element.totalGames + away[index].totalGames,
    totalVictories: element.totalVictories + away[index].totalVictories,
    totalDraws: element.totalDraws + away[index].totalDraws,
    totalLosses: element.totalLosses + away[index].totalLosses,
    goalsFavor: element.goalsFavor + away[index].goalsFavor,
    goalsOwn: element.goalsOwn + away[index].goalsOwn,
    goalsBalance: element.goalsBalance + away[index].goalsBalance,
    efficiency: percentualEffi(
      element.totalPoints + away[index].totalPoints,
      element.totalGames + away[index].totalGames,
    ),
  }));
  return result;
};

export {
  getAllHomeTeamMatches,
  leaderboardHome,
  winner,
  leaderHome,
};
