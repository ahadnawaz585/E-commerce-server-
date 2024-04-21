import refundModel from "../models/refund.model";
import { paginatedData } from "../Types/paginatedData";
import { RefundStatus } from "../enums/refund";
import { Refund } from "../Types/refund";


class RefundService {
    async getRefunds(value: RefundStatus): Promise<Refund[]> {
        return await refundModel.refund.getRefunds(value);
    }
    async getRefund(page: number, pageSize: number): Promise<paginatedData> {
        return await refundModel.refund.uetPgFindMany(page, pageSize);
    }
    async getAllRefunds(): Promise<Refund[]> {
        return await refundModel.refund.uetFindMany();
    }
    async getRefundCount(): Promise<number> {
        return await refundModel.refund.uetCount();
    }

    async createRefund(refund: Refund | Refund[]): Promise<Refund | Refund[]> {
        return await refundModel.refund.uetCreate(refund);
    }

    async updateRefund(id: string, refund: Refund): Promise<Refund | null> {
        return await refundModel.refund.uetUpdate(id, refund);
    }
    async deleteRefund(id: string): Promise<void> {
        await refundModel.refund.uetSoftDelete(id);
    }

    async restoreRefund(id: string): Promise<void> {
        await refundModel.refund.uetRestore(id);
    }

    async getRefundById(id: string): Promise<Refund> {
        return await refundModel.refund.uetFindById(id);
    }


}

export default RefundService;
