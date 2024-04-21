import express, {  Router } from 'express';
import OrderController from '../controllers/order.controller';

class OrderRoutes {
  private router: Router;
  private controller: OrderController;

  constructor() {
    this.router = express.Router();
    this.controller = new OrderController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllOrder.bind(this.controller)); 
    this.router.post('/get', this.controller.getOrders.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getSize.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getOrderById.bind(this.controller));
    this.router.post('/create', this.controller.createOrder.bind(this.controller));
    this.router.put('/update', this.controller.updateOrder.bind(this.controller));
    this.router.post('/restore', this.controller.restoreOrder.bind(this.controller));
    this.router.post('/delete', this.controller.deleteOrder.bind(this.controller));
    this.router.get('/getPending', this.controller.getPendingOrders.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default OrderRoutes;
