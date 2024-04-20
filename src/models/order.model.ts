import { Prisma } from "@prisma/client";
import prisma from "./baseModel";

const orderModel = prisma.$extends({
  model: {
    order: {
      async exampleMethod(this: any, value: number) {
        const data =
          await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
        `);
      },
      //   async abc(){
      //another example method
      //   }
    },
  },
});

export default orderModel;
