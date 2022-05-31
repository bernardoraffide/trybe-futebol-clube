import Teams from '../database/models/TeamsModel';

const getAllTeams = () => {
  const teams = Teams.findAll();
  return teams;
};

export default getAllTeams;
