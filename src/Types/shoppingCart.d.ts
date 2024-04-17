export interface ShoppingCart {
    id: string;
    customerId: string;
    productId: string;
    quantity: number;
    added_to_cart_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }