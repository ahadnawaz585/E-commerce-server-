import ShoppingCartModel from "../models/shoppingcart.model";
import { ShoppingCart } from "../Types/shoppingCart";
import { paginatedData } from "../Types/paginatedData";



class ShoppingCartService {

    async getShoppingCart(page: number, pageSize: number): Promise<paginatedData> {
        return await ShoppingCartModel.shoppingCart.uetPgFindMany(page, pageSize);
    }
    async getAllShoppingCarts(): Promise<ShoppingCart[]> {
        return await ShoppingCartModel.shoppingCart.uetFindMany();
    }
    async getShoppingCartCount(): Promise<number> {
        return await ShoppingCartModel.shoppingCart.uetCount();
    }

    async createShoppingCart(shoppingCart: ShoppingCart | ShoppingCart[]): Promise<ShoppingCart | ShoppingCart[]> {
        return await ShoppingCartModel.shoppingCart.uetCreate(shoppingCart);
    }

    async updateShoppingCart(id: string, shoppingCart: ShoppingCart): Promise<ShoppingCart | null> {
        return await ShoppingCartModel.shoppingCart.uetUpdate(id, shoppingCart);
    }
    async deleteShoppingCart(id: string): Promise<void> {
        await ShoppingCartModel.shoppingCart.uetSoftDelete(id);
    }

    async restoreShoppingCart(id: string): Promise<void> {
        await ShoppingCartModel.shoppingCart.uetRestore(id);
    }

    async getShoppingCartById(id: string): Promise<ShoppingCart> {
        return await ShoppingCartModel.shoppingCart.uetFindById(id);
    }
    async getShoppingCartByName(name: string): Promise<ShoppingCart> {
        return await ShoppingCartModel.shoppingCart.uetFindByName(name);
    }

}
export default ShoppingCartService;

