import { Router } from 'express';
import { validateToken } from '../middlewares/jwt';
import validateLogin from '../middlewares/login';
import { login, getUserRole } from '../controllers/login';

const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

loginRouter.get('/validate', validateToken, getUserRole);

export default loginRouter;
