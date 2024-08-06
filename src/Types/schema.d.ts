//all the schema interfaaces will be here
import { Role } from "../enums/role";
import { RefundStatus } from "../enums/refund";
import { OrderStatus } from "../enums/orderStatus";

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}

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

export interface Wishlist {
  id: string;
  customerId: string;
  productId: string;
  added_to_wishlist_date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}

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

export interface paginatedData {
  data: any;
  totalSize: number;
}

export interface OTP {
  id?: string; // Assuming the id is a string
  email: string;
  OTP: number;
}

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

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone_number?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}

export interface BlacklistToken {
  id: string;
  token: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}
