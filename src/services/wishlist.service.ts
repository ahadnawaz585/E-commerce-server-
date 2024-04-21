import wishlistModel from "../models/wishlist.model";
import { Wishlist } from "../Types/whishlist";
import { Customer } from "../Types/customer";
import { paginatedData } from "../Types/paginatedData";



class WishlistService {
    async getWishlistOfAUser(value: Customer ): Promise<Wishlist[]> {
        return await wishlistModel.wishlist.getWishlistOfAUser(value);
    }
    async getWishlist(page: number, pageSize: number): Promise<paginatedData> {
        return await wishlistModel.wishlist.uetPgFindMany(page, pageSize);
    }
    async getAllWishlists(): Promise<Wishlist[]> {
        return await wishlistModel.wishlist.uetFindMany();
    }
    async getWishlistCount(): Promise<number> {
        return await wishlistModel.wishlist.uetCount();
    }

    async createWishlist(wishlist: Wishlist | Wishlist[]): Promise<Wishlist | Wishlist[]> {
        return await wishlistModel.wishlist.uetCreate(wishlist);
    }

    async updateWishlist(id: string, wishlist: Wishlist): Promise<Wishlist | null> {
        return await wishlistModel.wishlist.uetUpdate(id, wishlist);
    }
    async deleteWishlist(id: string): Promise<void> {
        await wishlistModel.wishlist.uetSoftDelete(id);
    }

    async restoreWishlist(id: string): Promise<void> {
        await wishlistModel.wishlist.uetRestore(id);
    }

    async getWishlistById(id: string): Promise<Wishlist> {
        return await wishlistModel.wishlist.uetFindById(id);
    }

}

export default WishlistService;
