import prisma from "../core/models/baseModel";
import { RefundStatus } from "../enums/refund";
import { Refund } from "../Types/refund";
import { Prisma } from "@prisma/client";
const refundModel= prisma.$extends({
  model: {
    refund: {
        async getRefunds(this: any, value: RefundStatus): Promise<Refund[]> {
            const refund: Refund[] = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Refund" WHERE status = ${value};`
            )
            return refund;
        }
    },
  },
});

export default refundModel;
