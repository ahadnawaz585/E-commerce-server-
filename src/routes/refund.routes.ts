import express, {  Router } from 'express';
import RefundController from '../controllers/refund.controller';

class refundRoutes {
  private router: Router;
  private controller: RefundController;

  constructor() {
    this.router = express.Router();
    this.controller = new RefundController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllRefunds.bind(this.controller)); 
    this.router.post('/get', this.controller.getRefund.bind(this.controller)); //paginated
    this.router.post('/get', this.controller.getRefunds.bind(this.controller)); 
    this.router.get('/getSize', this.controller.getRefundCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getRefundById.bind(this.controller));
    this.router.post('/create', this.controller.createRefund.bind(this.controller));
    this.router.put('/update', this.controller.updateRefund.bind(this.controller));
    this.router.post('/restore', this.controller.restoreRefund.bind(this.controller));
    this.router.post('/delete', this.controller.deleteRefund.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default refundRoutes;
