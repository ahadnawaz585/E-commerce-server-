import { Request, Response } from 'express';
import BaseController from './baseController';
import { Wishlist } from '../Types/whishlist';
import { Customer } from '../Types/customer';
import WishlistService from '../services/wishlist.service';

class WishlistController extends BaseController<WishlistService> {
  protected service = new WishlistService();

  async getWishlistCount(req: Request, res: Response) {
    let operation = () => this.service.getWishlistCount();
    let successMessage = 'Wishlists retrieved successfully!';
    let errorMessage = 'Error retrieving Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getWishlist(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getWishlist(page, pageSize);
    let successMessage = 'Wishlist retrieved successfully!';
    let errorMessage = 'Error retrieving Wishlist:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllWishlists(req: Request, res: Response) {
    let operation = () => this.service.getAllWishlists();
    let successMessage = 'Wishlists retrieved successfully!';
    let errorMessage = 'Error retrieving Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createWishlist(req: Request, res: Response) {
    let wishlistData:Wishlist  | Wishlist[] = req.body;
    let operation = () => this.service.createWishlist(wishlistData);
    let successMessage = 'Wishlists created successfully!';
    let errorMessage = 'Error creating Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateWishlist(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateWishlist(id, data);
    let successMessage = 'Wishlists updated successfully!';
    let errorMessage = 'Error updating Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteWishlist(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteWishlist(id);
    let successMessage = 'Wishlists deleted successfully!';
    let errorMessage = 'Error deleting Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreWishlist(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreWishlist(id);
    let successMessage = 'Wishlists restored successfully!';
    let errorMessage = 'Error restoring Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getWishlistById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getWishlistById(id);
    let successMessage = ' Wishlists retrieved successfully!';
    let errorMessage = 'Error retrieving  Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  
  async getWishlistOfAUser(req: Request, res: Response) {
    let customerData:Customer  = req.body;
    let operation = () => this.service.getWishlistOfAUser(customerData);
    let successMessage = ' Wishlists retrieved successfully!';
    let errorMessage = 'Error retrieving  Wishlists:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
}

export default WishlistController;
