import express, {  Router } from 'express';
import ReviewController from '../controllers/review.controller';

class reviewRoutes {
  private router: Router;
  private controller: ReviewController;

  constructor() {
    this.router = express.Router();
    this.controller = new ReviewController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllReviews.bind(this.controller)); 
    this.router.post('/get', this.controller.getReview.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getReviewCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getReviewById.bind(this.controller));
    this.router.post('/create', this.controller.createReview.bind(this.controller));
    this.router.put('/update', this.controller.updateReview.bind(this.controller));
    this.router.post('/restore', this.controller.restoreReview.bind(this.controller));
    this.router.post('/delete', this.controller.deleteReview.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default reviewRoutes;
