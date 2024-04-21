import { Request, Response } from 'express';
import BaseController from './baseController';
import { ShoppingCart } from '../Types/shoppingCart';
import ShoppingCartService from '../services/shoppingcart.service';

class ShoppingCartController extends BaseController<ShoppingCartService> {
  protected service = new ShoppingCartService();

  async getShoppingCartCount(req: Request, res: Response) {
    let operation = () => this.service.getShoppingCartCount();
    let successMessage = 'ShoppingCart retrieved successfully!';
    let errorMessage = 'Error retrieving ShoppingCart:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getShoppingCart(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getShoppingCart(page, pageSize);
    let successMessage = 'ShoppingCarts retrieved successfully!';
    let errorMessage = 'Error retrieving ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllShoppingCarts(req: Request, res: Response) {
    let operation = () => this.service.getAllShoppingCarts();
    let successMessage = 'ShoppingCart retrieved successfully!';
    let errorMessage = 'Error retrieving ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createShoppingCart(req: Request, res: Response) {
    let ShoppingCartData:  | ShoppingCart[] = req.body;
    let operation = () => this.service.createShoppingCart(ShoppingCartData);
    let successMessage = 'ShoppingCarts created successfully!';
    let errorMessage = 'Error creating ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateShoppingCart(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateShoppingCart(id, data);
    let successMessage = 'ShoppingCarts updated successfully!';
    let errorMessage = 'Error updating ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteShoppingCart(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteShoppingCart(id);
    let successMessage = 'ShoppingCarts deleted successfully!';
    let errorMessage = 'Error deleting ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreShoppingCart(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreShoppingCart(id);
    let successMessage = 'ShoppingCarts restored successfully!';
    let errorMessage = 'Error restoring ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getShoppingCartById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getShoppingCartById(id);
    let successMessage = ' ShoppingCarts retrieved successfully!';
    let errorMessage = 'Error retrieving ShoppingCarts:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  

}

export default ShoppingCartController;
