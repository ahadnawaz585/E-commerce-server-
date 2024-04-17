import { Request, Response } from "express";
import BaseController from "./baseController";
import { User } from "../Types/user";
import UserService from "../services/user.service";
import BlackListedTokenService from "../services/blackListToken.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthHelper from "../helper/auth.helper";

class UserController extends BaseController<UserService> {
  protected service = new UserService();
  protected tokenService = new BlackListedTokenService();

  async getUsers(req: Request, res: Response) {
    let operation = () => this.service.getUsers();
    let successMessage = "Users retrieved successfully!";
    let errorMessage = "Error retrieving users:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async getUserById(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.getById(id);
    let successMessage = "Users retrieved successfully!";
    let errorMessage = "Error retrieving users:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async createUser(req: Request, res: Response) {
    let userData: User | User[] = req.body;
    let operation = () => this.service.createUsers(userData);
    let successMessage = "User created successfully!";
    let errorMessage = "Error creating user:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async updateUser(req: Request, res: Response) {
    let { id, data } = req.body;
    let operation = () => this.service.updateUsers(id, data);
    let successMessage = "User updated successfully!";
    let errorMessage = "Error updating user:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async deleteUser(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.deleteUser(id);
    let successMessage = "User deleted successfully!";
    let errorMessage = "Error deleting user:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async restoreUser(req: Request, res: Response) {
    let { id } = req.body;
    let operation = () => this.service.restoreUser(id);
    let successMessage = "User restored successfully!";
    let errorMessage = "Error restoring user:";
    this.handleRequest(operation, successMessage, errorMessage, res);
  }

  async loginUser(req: Request, res: Response) {
    let { username, password, rememberMe } = req.body;
    let user: User | null = await this.service.getUserByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const expiresIn = rememberMe ? "6M" : "24h";
    let token = jwt.sign({ userId: user.id }, "your_secret_key", {
      expiresIn,
    });

    res.json({ token });
  }

  async logoutUser(req: Request, res: Response) {
    const token = AuthHelper.getTokenFromHeader(req);

    if (token) {
      const userId = AuthHelper.getUserIdFromHeader(req);

      if (userId) {
        await this.tokenService.createBlacListToken(token, userId);
      }

      res.json({ message: "User logged out successfully" });
    } else {
      res.status(400).json({ message: "Token not provided" });
    }
  }
}

export default UserController;
