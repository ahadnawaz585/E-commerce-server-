import { Request, Response } from 'express';
import BaseController from './baseController';
import { Order } from '../Types/order';
import OrderService from '../services/order.service';

class OrderController extends BaseController<OrderService> {
  protected service = new OrderService();

  async getSize(req: Request, res: Response) {
    let operation = () => this.service.getSize();
    let successMessage = 'Size retrieved successfully!';
    let errorMessage = 'Error retrieving Size:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getOrders(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getOrder(page, pageSize);
    let successMessage = 'Orders retrieved successfully!';
    let errorMessage = 'Error retrieving Orders:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllOrder(req: Request, res: Response) {
    let operation = () => this.service.getAllOrders();
    let successMessage = 'Orders retrieved successfully!';
    let errorMessage = 'Error retrieving Orders:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createOrder(req: Request, res: Response) {
    let orderData: Order | Order[] = req.body;
    let operation = () => this.service.createOrder(orderData);
    let successMessage = 'Order created successfully!';
    let errorMessage = 'Error creating Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateOrder(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateOrder(id, data);
    let successMessage = 'Order updated successfully!';
    let errorMessage = 'Error updating Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteOrder(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteOrder(id);
    let successMessage = 'Order deleted successfully!';
    let errorMessage = 'Error deleting Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreOrder(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreOrder(id);
    let successMessage = 'Order restored successfully!';
    let errorMessage = 'Error restoring Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getOrderById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getOrderById(id);
    let successMessage = ' Order retrieved successfully!';
    let errorMessage = 'Error retrieving  Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getPendingOrders(req: Request, res: Response) {
    let { value } = req.body;
    let operation = () => this.service.getPendingOrders(value);
    let successMessage = ' Orders retrieved successfully!';
    let errorMessage = 'Error retrieving  Order:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  

}

export default OrderController;
