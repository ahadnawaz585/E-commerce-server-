import prisma from "../core/models/baseModel";
import { Customer } from "../Types/customer";
const customerModel= prisma.$extends({
  model: {
    customer: {
    //   async exampleMethod(this: any, value: number) {
    //     const data =
    //       await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
    //     `);
    //   },
     
    },
  },
});

export default customerModel;
