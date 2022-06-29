import { Request, Response } from 'express';
import loginService from '../services/login';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginService({ email, password });

  if (!user) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  return res.status(200).json(user);
};

const getUserRole = (req: Request, res: Response) => res.status(200).json(req.body.user.role);

export {
  login,
  getUserRole,
};
