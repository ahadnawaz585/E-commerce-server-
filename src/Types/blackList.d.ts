export interface BlacklistToken {
    id: string;
    token: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: Date;
  }