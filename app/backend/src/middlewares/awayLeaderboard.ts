import { IAwayMatch } from '../interfaces';

const calculatePoints = (matches: IAwayMatch[]) => {
  let points = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      points += 3;
    }

    if (match.homeTeamGoals === match.awayTeamGoals) {
      points += 1;
    }
  });
  return points;
};

const calculateVictories = (matches: IAwayMatch[]) => {
  let victories = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      victories += 1;
    }
  });
  return victories;
};

const calculateLosses = (matches: IAwayMatch[]) => {
  let losses = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) losses += 1;
  });
  return losses;
};

const calculateDraw = (matches: IAwayMatch[]) => {
  let draws = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      draws += 1;
    }
  });
  return draws;
};

const calcularGolsFavor = (matches: IAwayMatch[]) => {
  let gols = 0;

  matches.forEach((match) => {
    if (match.awayTeamGoals) {
      gols += match.awayTeamGoals;
    }
  });
  return gols;
};

const calcularGolsContra = (matches: IAwayMatch[]) => {
  let gols = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals) {
      gols += match.homeTeamGoals;
    }
  });
  return gols;
};

const calculateTotalScore = (matches: IAwayMatch[]) => {
  const homeGoals = calcularGolsFavor(matches);
  const awayGoals = calcularGolsContra(matches);

  const totalScore = homeGoals - awayGoals;
  return totalScore;
};

const calculateVictoriesPercentage = (matches: IAwayMatch[]) => {
  const points = calculatePoints(matches);
  const partidas = matches.length * 3;
  const victoryPercentage = points / partidas;

  if (!Number.isInteger(victoryPercentage * 100)) {
    return (victoryPercentage * 100).toFixed(2);
  }
  return victoryPercentage * 100;
};

export {
  calculatePoints,
  calculateVictories,
  calculateLosses,
  calculateDraw,
  calcularGolsFavor,
  calcularGolsContra,
  calculateTotalScore,
  calculateVictoriesPercentage,
};
