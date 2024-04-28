import { Role } from "../enums/role";
export interface User {
  id: string;
  username: string;
  password: string;
  email:string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: Date;
}
