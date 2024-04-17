import { OrderStatus } from "../enums/orderStatus";
export interface Order {
    id: string;
    customerId: string;
    order_date: Date;
    total_amount: number;
    status: OrderStatus;
    shipping_address?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }