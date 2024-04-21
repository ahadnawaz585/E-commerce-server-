import { Request, Response } from 'express';
import BaseController from './baseController';
import { Refund } from '../Types/refund';
import { RefundStatus } from '../enums/refund';
import RefundService from '../services/refund.service';

class RefundController extends BaseController<RefundService> {
  protected service = new RefundService();

  async getRefundCount(req: Request, res: Response) {
    let operation = () => this.service.getRefundCount();
    let successMessage = 'Refunds retrieved successfully!';
    let errorMessage = 'Error retrieving Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getRefund(req: Request, res: Response) {
    let { page, pageSize } = req.body;
    let operation = () => this.service.getRefund(page, pageSize);
    let successMessage = 'Refund retrieved successfully!';
    let errorMessage = 'Error retrieving Refund:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getRefunds(req: Request, res: Response) {
    let refundData :RefundStatus =  req.body;
    let operation = () => this.service.getRefunds(refundData);
    let successMessage = ' Refunds retrieved successfully!';
    let errorMessage = 'Error retrieving  Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  async getAllRefunds(req: Request, res: Response) {
    let operation = () => this.service.getAllRefunds();
    let successMessage = 'Refunds retrieved successfully!';
    let errorMessage = 'Error retrieving Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createRefund(req: Request, res: Response) {
    let refundData:Refund  | Refund[] = req.body;
    let operation = () => this.service.createRefund(refundData);
    let successMessage = 'Refunds created successfully!';
    let errorMessage = 'Error creating Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateRefund(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateRefund(id, data);
    let successMessage = 'Refunds updated successfully!';
    let errorMessage = 'Error updating Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteRefund(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteRefund(id);
    let successMessage = 'Refunds deleted successfully!';
    let errorMessage = 'Error deleting Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreRefund(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreRefund(id);
    let successMessage = 'Refunds restored successfully!';
    let errorMessage = 'Error restoring Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getRefundById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getRefundById(id);
    let successMessage = ' Refunds retrieved successfully!';
    let errorMessage = 'Error retrieving  Refunds:';
    await this.handleRequest(operation, successMessage, errorMessage, res);
  }
  

}

export default RefundController;
