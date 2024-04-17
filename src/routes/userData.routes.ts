import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

class UserDataRoutes {
  private router: Router;
  private controller: UserController;

  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getUsers.bind(this.controller));
    this.router.post('/get', this.controller.getUserById.bind(this.controller));
    this.router.post('/create', this.controller.createUser.bind(this.controller));
    this.router.put('/update/:id', this.controller.updateUser.bind(this.controller));
    this.router.post('/restore', this.controller.restoreUser.bind(this.controller));
    this.router.post('/delete', this.controller.deleteUser.bind(this.controller));
  }
  

  public getRouter(): Router {
    return this.router;
  }
}

export default UserDataRoutes;
