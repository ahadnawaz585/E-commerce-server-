import ReviewModel from "../models/review.model";
import { Review } from "../Types/review";
import { paginatedData } from "../Types/paginatedData";



class ReviewService {

    async getReview(page: number, pageSize: number): Promise<paginatedData> {
        return await ReviewModel.review.uetPgFindMany(page, pageSize);
    }
    async getAllReviews(): Promise<Review[]> {
        return await ReviewModel.review.uetFindMany();
    }
    async getReviewCount(): Promise<number> {
        return await ReviewModel.review.uetCount();
    }

    async createReview(review: Review | Review[]): Promise<Review | Review[]> {
        return await ReviewModel.review.uetCreate(review);
    }

    async updateReview(id: string, review: Review): Promise<Review | null> {
        return await ReviewModel.review.uetUpdate(id, review);
    }
    async deleteReview(id: string): Promise<void> {
        await ReviewModel.review.uetSoftDelete(id);
    }

    async restoreReview(id: string): Promise<void> {
        await ReviewModel.review.uetRestore(id);
    }

    async getReviewById(id: string): Promise<Review> {
        return await ReviewModel.review.uetFindById(id);
    }

}

export default ReviewService;
