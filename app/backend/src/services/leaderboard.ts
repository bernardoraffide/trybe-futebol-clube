import { leaderboardAway } from './awayLeaderboard';
import { leaderboardHome } from './homeLeaderboard';

const percentualEffi = (p: number, g: number) => Number(((p / (g * 3)) * 100).toFixed(2));

const winner = async () => {
  const home = await leaderboardHome();
  const away = await leaderboardAway();
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

const sortLeaderboard = async () => {
  const leader = await winner();
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
  winner,
  sortLeaderboard,
};
