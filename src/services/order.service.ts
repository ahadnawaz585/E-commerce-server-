import orderModel from "../models/order.model";
import { paginatedData } from "../Types/paginatedData";
import { Order } from "../Types/order";

class OrderService {
  async getOrder(page: number, pageSize: number): Promise<paginatedData> {
    return await orderModel.order.uetPgFindMany(page, pageSize);
  }

  async getAllOrders(): Promise<Order[]> {
    return await orderModel.order.uetFindMany();
  }

  async getSize(): Promise<number> {
    return await orderModel.order.uetCount();
  }

  async createOrder(order: Order | Order[]): Promise<Order | Order[]> {
    return await orderModel.order.uetCreate(order);
  }

  async updateOrder(id: string, order: Order): Promise<Order | null> {
    return await orderModel.order.uetUpdate(id, order);
  }

  async deleteOrder(id: string): Promise<void> {
    await orderModel.order.uetSoftDelete(id);
  }

  async restoreOrder(id: string): Promise<void> {
    await orderModel.order.uetRestore(id);
  }

  async getOrderById(id: string): Promise<Order> {
    return await orderModel.order.uetFindById(id);
  }

  async exampleMethod(value: number): Promise<any> {
    return await orderModel.order.exampleMethod(value);
  }
}

export default OrderService;
