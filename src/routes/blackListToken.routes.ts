import express, {  Router } from 'express';
import BlacklistTokenController from '../controllers/blackListToken.controller';

class BlacklistTokenRoutes {
  private router: Router;
  private controller: BlacklistTokenController;

  constructor() {
    this.router = express.Router();
    this.controller = new BlacklistTokenController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllTokens.bind(this.controller)); 
    this.router.post('/create', this.controller.createBlacListToken.bind(this.controller));
    this.router.post('/delete', this.controller.deleteToken.bind(this.controller));
    this.router.put('/upadate', this.controller.isAuthenticatedToken.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default BlacklistTokenRoutes;
