import { RefundStatus } from "../enums/refund";
export interface Refund {
    id: string;
    orderId: string;
    return_date: Date;
    reason: string;
    status: RefundStatus;
    refund_amount: number;
    customerId: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }