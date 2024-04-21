import { Request, Response } from 'express';
import BaseController from './baseController';
import { Review } from '../Types/review';
import ReviewService from '../services/review.service';

class ReviewController extends BaseController<ReviewService> {
  protected service = new ReviewService();

  async getReviewCount(req: Request, res: Response) {
    let operation = () => this.service.getReviewCount();
    let successMessage = 'Reviews retrieved successfully!';
    let errorMessage = 'Error retrieving Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getReview(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getReview(page, pageSize);
    let successMessage = 'Review retrieved successfully!';
    let errorMessage = 'Error retrieving Review:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getAllReviews(req: Request, res: Response) {
    let operation = () => this.service.getAllReviews();
    let successMessage = 'Reviews retrieved successfully!';
    let errorMessage = 'Error retrieving Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createReview(req: Request, res: Response) {
    let reviewData:Review  | Review[] = req.body;
    let operation = () => this.service.createReview(reviewData);
    let successMessage = 'Reviews created successfully!';
    let errorMessage = 'Error creating Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateReview(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateReview(id, data);
    let successMessage = 'Reviews updated successfully!';
    let errorMessage = 'Error updating Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteReview(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteReview(id);
    let successMessage = 'Reviews deleted successfully!';
    let errorMessage = 'Error deleting Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreReview(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreReview(id);
    let successMessage = 'Reviews restored successfully!';
    let errorMessage = 'Error restoring Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getReviewById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getReviewById(id);
    let successMessage = ' Reviews retrieved successfully!';
    let errorMessage = 'Error retrieving  Reviews:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  

}

export default ReviewController;
