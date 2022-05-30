import { Router } from 'express';
import validateLogin from '../middlewares/login';
import login from '../controllers/login';

const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

export default loginRouter;
