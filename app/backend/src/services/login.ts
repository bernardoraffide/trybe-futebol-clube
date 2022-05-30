import Users from '../database/models/UsersModel';
import { ILoginPayload } from '../interfaces';
import { generateToken } from '../middlewares/jwt';

const loginService = async (payload: ILoginPayload) => {
  const loginUser = await Users.findOne({ where: { email: payload.email } });

  if (!loginUser) return null;

  const { id, username, role, email } = loginUser;

  const token = await generateToken({ id, username, role, email });

  return {
    user: { id, username, role, email },
    token,
  };
};

export default loginService;
