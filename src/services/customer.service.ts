import customerModel from "../models/customer.model";
import { paginatedData } from "../Types/paginatedData";
import { Customer } from "../Types/customer";
class CustomerService {

    async getCustomer(page: number, pageSize: number): Promise<paginatedData> {
        return await customerModel.customer.uetPgFindMany(page, pageSize);
    }
    async getAllCustomers(): Promise<Customer[]> {
        return await customerModel.customer.uetFindMany();
    }
    async getCustomerCount(): Promise<number> {
        return await customerModel.customer.uetCount();
    }

    async createCustomer(customer: Customer | Customer[]): Promise<Customer | Customer[]> {
        return await customerModel.customer.uetCreate(customer);
    }

    async updateCustomer(id: string, customer: Customer): Promise<Customer | null> {
        return await customerModel.customer.uetUpdate(id, customer);
    }
    async deleteCustomer(id: string): Promise<void> {
        await customerModel.customer.uetSoftDelete(id);
    }

    async restoreCustomer(id: string): Promise<void> {
        await customerModel.customer.uetRestore(id);
    }

    async getCustomerById(id: string): Promise<Customer> {
        return await customerModel.customer.uetFindById(id);
    }

}

export default CustomerService;
