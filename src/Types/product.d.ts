export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  stock_quantity: number;
  image?: string; // New property for the image URL
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}
