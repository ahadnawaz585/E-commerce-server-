import prisma from "./baseModel";
import { Customer } from "../Types/customer";
import { Wishlist } from "../Types/whishlist";
import { Prisma } from "@prisma/client";
const wishlistModel= prisma.$extends({
  model: {
    wishlist: {
        async getWishlistOfAUser(this: any, value: Customer): Promise<Wishlist[]> {
            const wishlistData: Wishlist[] = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Wishlist" WHERE "customerId" = ${value.id};`
            )
            return wishlistData;
        }
    },
  },
});

export default wishlistModel;
