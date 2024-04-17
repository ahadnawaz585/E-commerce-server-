  import express, { Router } from 'express';
  import UserController from '../controllers/user.controller';

  class AuthenticationRoutes {
    private router: Router;
    private controller: UserController;

    constructor() {
      this.router = express.Router();
      this.controller = new UserController();
      this.initializeRoutes();
    }

    private initializeRoutes(): void {
      this.router.post('/login', this.controller.loginUser.bind(this.controller));
      this.router.get('/logout', this.controller.logoutUser.bind(this.controller));
    }
    

    public getRouter(): Router {
      return this.router;
    }
  }

  export default AuthenticationRoutes;
