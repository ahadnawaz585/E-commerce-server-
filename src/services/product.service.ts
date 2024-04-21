import productModel from "../models/product.model";
import { paginatedData } from "../Types/paginatedData";
import { Product } from "../Types/product";
class ProductService {

    async getProduct(page: number, pageSize: number): Promise<paginatedData> {
        return await productModel.product.uetPgFindMany(page, pageSize);
    }
    async getAllProducts(): Promise<Product[]> {
        return await productModel.product.uetFindMany();
    }
    async getProductCount(): Promise<number> {
        return await productModel.product.uetCount();
    }

    async createProduct(product: Product | Product[]): Promise<Product | Product[]> {
        return await productModel.product.uetCreate(product);
    }

    async updateProduct(id: string, product: Product): Promise<Product | null> {
        return await productModel.product.uetUpdate(id, product);
    }
    async deleteProduct(id: string): Promise<void> {
        await productModel.product.uetSoftDelete(id);
    }

    async restoreProduct(id: string): Promise<void> {
        await productModel.product.uetRestore(id);
    }

    async getProductById(id: string): Promise<Product> {
        return await productModel.product.uetFindById(id);
    }

}

export default ProductService;
