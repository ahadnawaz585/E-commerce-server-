export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    category?: string;
    stock_quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }