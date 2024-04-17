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
  