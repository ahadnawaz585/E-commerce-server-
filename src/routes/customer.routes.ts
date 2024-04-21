import express, {  Router } from 'express';
import CustomerController from '../controllers/customer.controller';

class customerRoutes {
  private router: Router;
  private controller: CustomerController;

  constructor() {
    this.router = express.Router();
    this.controller = new CustomerController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllCustomers.bind(this.controller)); 
    this.router.post('/get', this.controller.getCustomer.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getCustomerCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getCustomerById.bind(this.controller));
    this.router.post('/create', this.controller.createCustomer.bind(this.controller));
    this.router.put('/update', this.controller.updateCustomer.bind(this.controller));
    this.router.post('/restore', this.controller.restoreCustomer.bind(this.controller));
    this.router.post('/delete', this.controller.deleteCustomer.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default customerRoutes;
