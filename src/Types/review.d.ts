export interface Review {
    id: string;
    productId: string;
    customerId: string;
    rating: number;
    review_text?: string;
    review_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }