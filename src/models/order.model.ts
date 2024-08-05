import { Prisma } from "@prisma/client";
import prisma from "../core/models/baseModel";
import { OrderStatus } from "../enums/orderStatus";
import { Order } from "../Types/order";
const orderModel = prisma.$extends({
  model: {
    order: {
      async exampleMethod(this: any, value: number) {
        const data =
          await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE total_amount > ${value};
        `);
      },
      async getPendingOrders(this: any, value: OrderStatus): Promise<Order[]> {
        const orders:Order[] = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Order" WHERE status = ${value};`
        )
        return orders;
      },
    },
  },
});

export default orderModel;
