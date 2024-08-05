import { Prisma } from "@prisma/client";
import prisma from "../core/models/baseModel";
import { Product } from "../Types/product";
import { Review } from "../Types/review";
const productModel = prisma.$extends({
  model: {
    product: {
      async reviewsOnProduct(this: any, postId: string): Promise<{ product: Product, reviews: Review[] }[]> {
        const data: { product: Product, reviews: Review[] }[] = await prisma.$queryRaw(Prisma.sql`
            SELECT review.*, product.* 
            FROM "review" 
            INNER JOIN "product" ON review.productId = product.id 
            WHERE product.postId = ${postId};
        `);
        return data;
      },
      async getAllProductsWithReviews(): Promise<{ product: Product, reviews: Review[] }[]> {
        const data: { product: Product, reviews: Review[] }[] = await prisma.$queryRaw(Prisma.sql`
            SELECT p.*, r.*
            FROM "Product" p
            LEFT JOIN "Review" r ON p.id = r.productId;
        `);
        return data;
      },
      async getProductsWithRecentReview(): Promise<{ product: Product; recentReview: Review | null }[]> {
        const data: { product: Product; recentReview: Review | null }[] = await prisma.$queryRaw(Prisma.sql`
          SELECT p.*, r.*
          FROM "Product" p
          LEFT JOIN "Review" r ON p.id = r.productId
          WHERE r.review_date = (
            SELECT MAX(review_date)
            FROM "Review"
            WHERE productId = p.id
          );
        `);

        return data;
      },
      async getProductsWithAverageRating(): Promise<{ product: Product, averageRating: number }[]> {
        const data: { product: Product, averageRating: number }[] = await prisma.$queryRaw(Prisma.sql`
            SELECT p.*, AVG(r.rating) AS averageRating
            FROM "Product" p
            LEFT JOIN "Review" r ON p.id = r.productId
            GROUP BY p.id;
        `);
        return data;
      },


    },
  },
});

export default productModel;
