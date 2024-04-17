import userModel from '../models/user.model';
import { User } from '../Types/user';

class UserService {
  async getUsers(): Promise<User[]> {
    return await userModel.user.uetFindMany();
  }

  async createUsers(userData: User|User[]): Promise<User|User[]> {
    return await userModel.user.uetCreate(userData);
  }

  async updateUsers(userId:string, updatedData: Partial<User>): Promise<User | null> {
    return await userModel.user.uetUpdate(userId, updatedData);
  }

  async deleteUser(userId:string): Promise<void> {
    return await userModel.user.uetSoftDelete(userId);
  }

  async restoreUser(userId:string): Promise<void> {
    return await userModel.user.uetRestore(userId);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await userModel.user.uetFindUnique(username);
  }

  async getById(userId:string): Promise<User[]> {
    return await userModel.user.uetFindById(userId);
  }
}

export default UserService;