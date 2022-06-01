interface ILoginUser {
  id: number;
  username: string;
  role: string;
  email: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

interface ICreatedMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: number;
}

interface IHomeMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamHome: {
    teamName: string;
  };
}

interface IAwayMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamAway: {
    teamName: string;
  };
}

export {
  ILoginUser,
  ILoginPayload,
  ICreatedMatch,
  IHomeMatch,
  IAwayMatch,
};
