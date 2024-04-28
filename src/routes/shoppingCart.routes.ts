import express, { Router } from 'express';
import ShoppingCartController from '../controllers/shoppingCart.controller';

class shoppingCartRoutes {
  private router: Router;
  private controller: ShoppingCartController;

  constructor() {
    this.router = express.Router();
    this.controller = new ShoppingCartController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllShoppingCarts.bind(this.controller));
    this.router.post('/get', this.controller.getShoppingCart.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getShoppingCartCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getShoppingCartById.bind(this.controller));
    this.router.post('/getByName', this.controller.getShoppingCartByName.bind(this.controller));
    this.router.post('/create', this.controller.createShoppingCart.bind(this.controller));
    this.router.put('/update', this.controller.updateShoppingCart.bind(this.controller));
    this.router.post('/restore', this.controller.restoreShoppingCart.bind(this.controller));
    this.router.post('/delete', this.controller.deleteShoppingCart.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default shoppingCartRoutes;
