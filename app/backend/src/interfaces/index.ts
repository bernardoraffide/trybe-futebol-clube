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

export {
  ILoginUser,
  ILoginPayload,
  ICreatedMatch,
};
