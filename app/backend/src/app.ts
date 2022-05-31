import * as express from 'express';
import loginRouter from './routes/login';
import matchesRouter from './routes/matches';
import teamsRouter from './routes/teams';

class App {
  public app: express.Express;

  constructor() {
    // ...
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
