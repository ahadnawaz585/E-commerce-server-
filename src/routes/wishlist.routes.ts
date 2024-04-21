import express, {  Router } from 'express';
import WishlistController from '../controllers/wishlist.controller';

class wishlistRoutes {
  private router: Router;
  private controller: WishlistController;

  constructor() {
    this.router = express.Router();
    this.controller = new WishlistController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/get', this.controller.getAllWishlists.bind(this.controller)); 
    this.router.post('/get', this.controller.getWishlist.bind(this.controller)); //paginated
    this.router.get('/getSize', this.controller.getWishlistCount.bind(this.controller)); //size
    this.router.post('/getById', this.controller.getWishlistById.bind(this.controller));
    this.router.post('/create', this.controller.createWishlist.bind(this.controller));
    this.router.put('/update', this.controller.updateWishlist.bind(this.controller));
    this.router.post('/restore', this.controller.restoreWishlist.bind(this.controller));
    this.router.post('/delete', this.controller.deleteWishlist.bind(this.controller));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default wishlistRoutes;
