import prisma from "./baseModel";
import { Review } from "../Types/review";
const ReviewModel = prisma.$extends({
  model: {
    revirew: {
      //   async exampleMethod(this: any, value: number) {
      //     const data =
      //       await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
      //     `);
      //   },

    },
  },
});

export default ReviewModel;
