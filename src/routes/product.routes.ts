import express, { Router } from 'express';
import ProductController from '../controllers/product.controller';

class productRoutes {
  private router: Router;
  private controller: ProductController;

  constructor() {
    this.router = express.Router();
    this.controller = new ProductController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllProducts.bind(this.controller));
    this.router.post('/get', this.controller.getProduct.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getProductCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getProductById.bind(this.controller));
    this.router.post('/getByCategory', this.controller.getProductByCategory.bind(this.controller));
    this.router.post('/getProductByName', this.controller.getProductByName.bind(this.controller));
    this.router.post('/create', this.controller.createProduct.bind(this.controller));
    this.router.put('/update', this.controller.updateProduct.bind(this.controller));
    this.router.post('/restore', this.controller.restoreProduct.bind(this.controller));
    this.router.post('/delete', this.controller.deleteProduct.bind(this.controller));
    this.router.get('/Productreviews', this.controller.reviewsOnProduct.bind(this.controller));
    this.router.get('/allProductWithreviews', this.controller.getAllProductsWithReviews.bind(this.controller));
    this.router.get('/recentReviews', this.controller.getProductsWithRecentReview.bind(this.controller));
    this.router.get('/reviewsWithAvgRating', this.controller.getProductsWithAverageRating.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default productRoutes;
