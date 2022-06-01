import { IHomeMatch } from '../interfaces';

const calculatePoints = (matches: IHomeMatch[]) => {
  let points = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      points += 3;
    }

    if (match.homeTeamGoals === match.awayTeamGoals) {
      points += 1;
    }
  });
  return points;
};

const calculateVictories = (matches: IHomeMatch[]) => {
  let victories = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      victories += 1;
    }
  });
  return victories;
};

const calculateLosses = (matches: IHomeMatch[]) => {
  let losses = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      losses += 1;
    }
  });
  return losses;
};

const calculateDraw = (matches: IHomeMatch[]) => {
  let draws = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      draws += 1;
    }
  });
  return draws;
};

const calcularGolsFavor = (matches: IHomeMatch[]) => {
  let gols = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals) {
      gols += match.homeTeamGoals;
    }
  });
  return gols;
};

const calcularGolsContra = (matches: IHomeMatch[]) => {
  let gols = 0;
  matches.forEach((match) => {
    if (match.awayTeamGoals) {
      gols += match.awayTeamGoals;
    }
  });
  return gols;
};

const calculateTotalScore = (matches: IHomeMatch[]) => {
  const homeGoals = calcularGolsFavor(matches);
  const awayGoals = calcularGolsContra(matches);

  const totalScore = homeGoals - awayGoals;
  return totalScore;
};

const calculateVictoriesPercentage = (matches: IHomeMatch[]) => {
  const points = calculatePoints(matches);
  const partidas = matches.length * 3;
  const victoryPercentage = points / partidas;

  return (victoryPercentage * 100).toFixed(2);
};

const percentualEffi = (p: number, g: number) => Number(((p / (g * 3)) * 100).toFixed(2));

export {
  calculatePoints,
  calculateVictories,
  calculateLosses,
  calculateDraw,
  calcularGolsFavor,
  calcularGolsContra,
  calculateTotalScore,
  calculateVictoriesPercentage,
  percentualEffi,
};
