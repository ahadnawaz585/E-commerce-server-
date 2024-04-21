import prisma from "./baseModel";
const ShoppingCartModel= prisma.$extends({
  model: {
    shoppingCart: {
    //   async exampleMethod(this: any, value: number) {
    //     const data =
    //       await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
    //     `);
    //   },
     
    },
  },
});

export default ShoppingCartModel;
