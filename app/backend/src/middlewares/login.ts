import { Request, Response, NextFunction } from 'express';
import { compareSync } from 'bcryptjs';
import Users from '../database/models/UsersModel';

const incorrectEmailMessage = 'Incorrect email or password';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const regex = /\S+@\S+.\S\.+com/;

  if (!regex.test(email)) return res.status(401).json({ message: incorrectEmailMessage });

  if (password.length <= 6) {
    return res.status(401).json({ message: 'Password must have at least 6 characters' });
  }

  const loginUser = await Users.findOne({ where: { email } });

  if (!loginUser) {
    return res.status(401).json({ message: incorrectEmailMessage });
  }

  if (!compareSync(password, loginUser.password)) {
    return res.status(401).json({ message: incorrectEmailMessage });
  }

  next();
};

export default validateLogin;
