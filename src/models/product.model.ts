import { Prisma } from "@prisma/client";
import prisma from "./baseModel";
import { Product } from "../Types/product";
const productModel= prisma.$extends({
  model: {
    product: {
    //   async exampleMethod(this: any, value: number) {
    //     const data =
    //       await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
    //     `);
    //   },
     
    },
  },
});

export default productModel;
