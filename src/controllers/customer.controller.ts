import { Request, Response } from 'express';
import BaseController from '../core/controller/baseController';
import { Customer } from '../Types/customer';
import CustomerService from '../services/customer.service';

class CustomerController extends BaseController<CustomerService> {
  protected service = new CustomerService();

  async getCustomerCount(req: Request, res: Response) {
    let operation = () => this.service.getCustomerCount();
    let successMessage = 'Customers retrieved successfully!';
    let errorMessage = 'Error retrieving Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getCustomer(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getCustomer(page, pageSize);
    let successMessage = 'Customer retrieved successfully!';
    let errorMessage = 'Error retrieving Customer:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllCustomers(req: Request, res: Response) {
    let operation = () => this.service.getAllCustomers();
    let successMessage = 'Customers retrieved successfully!';
    let errorMessage = 'Error retrieving Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createCustomer(req: Request, res: Response) {
    let customerData:Customer  | Customer[] = req.body;
    let operation = () => this.service.createCustomer(customerData);
    let successMessage = 'Customers created successfully!';
    let errorMessage = 'Error creating Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateCustomer(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateCustomer(id, data);
    let successMessage = 'Customers updated successfully!';
    let errorMessage = 'Error updating Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteCustomer(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteCustomer(id);
    let successMessage = 'Customers deleted successfully!';
    let errorMessage = 'Error deleting Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreCustomer(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreCustomer(id);
    let successMessage = 'Customers restored successfully!';
    let errorMessage = 'Error restoring Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getCustomerById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getCustomerById(id);
    let successMessage = ' Customers retrieved successfully!';
    let errorMessage = 'Error retrieving  Customers:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  

}

export default CustomerController;
