import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';
import { Request, Response, NextFunction } from 'express';
import { ILoginUser } from '../interfaces';

const secret = async () => fs.readFile('jwt.evaluation.key', 'utf-8');

const generateToken = async (payload: ILoginUser) => {
  const mySecret = await secret();
  const token = jwt.sign(payload, mySecret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const mySecret = await secret();

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decode = jwt.verify(token, mySecret) as jwt.JwtPayload;

    req.body.user = decode;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export {
  generateToken,
  validateToken,
};
