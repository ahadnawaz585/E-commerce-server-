import { Request, Response } from 'express';
import BaseController from './baseController';
import { Product } from '../Types/product';
import ProductService from '../services/product.service';

class ProductController extends BaseController<ProductService> {
  protected service = new ProductService();

  async getProductCount(req: Request, res: Response) {
    let operation = () => this.service.getProductCount();
    let successMessage = 'Products retrieved successfully!';
    let errorMessage = 'Error retrieving Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getProduct(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getProduct(page, pageSize);
    let successMessage = 'Product retrieved successfully!';
    let errorMessage = 'Error retrieving Product:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllProducts(req: Request, res: Response) {
    let operation = () => this.service.getAllProducts();
    let successMessage = 'Products retrieved successfully!';
    let errorMessage = 'Error retrieving Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createProduct(req: Request, res: Response) {
    let productData: Product | Product[] = req.body;
    let operation = () => this.service.createProduct(productData);
    let successMessage = 'Products created successfully!';
    let errorMessage = 'Error creating Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateProduct(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateProduct(id, data);
    let successMessage = 'Products updated successfully!';
    let errorMessage = 'Error updating Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteProduct(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteProduct(id);
    let successMessage = 'Products deleted successfully!';
    let errorMessage = 'Error deleting Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreProduct(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreProduct(id);
    let successMessage = 'Products restored successfully!';
    let errorMessage = 'Error restoring Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getProductById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getProductById(id);
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getProductByCategory(req: Request, res: Response) {
    let { category } = req.body;
    let operation = () => this.service.getProductByCategory(category);
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getProductByName(req: Request, res: Response) {
    let { name } = req.body;
    let operation = () => this.service.getProductByName(name);
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async reviewsOnProduct(req: Request, res: Response) {
    let { postId } = req.body;
    let operation = () => this.service.reviewsOnProduct(postId);
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getAllProductsWithReviews(req: Request, res: Response) {
    let operation = () => this.service.getAllProductsWithReviews();
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getProductsWithRecentReview(req: Request, res: Response) {
    let operation = () => this.service.getProductsWithRecentReview();
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getProductsWithAverageRating(req: Request, res: Response) {
    let operation = () => this.service.getProductsWithAverageRating();
    let successMessage = ' Products retrieved successfully!';
    let errorMessage = 'Error retrieving  Products:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }


}

export default ProductController;
