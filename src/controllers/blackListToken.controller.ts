import { Request, Response } from 'express';
import BaseController from './baseController';
import blackListTokenService from '../services/blackListToken.service';


class blackListTokenController extends BaseController<blackListTokenService> {
    protected service = new blackListTokenService();

    async getAllTokens(req: Request, res: Response) {
        let operation = () => this.service.getAllTokens();
        let successMessage = 'Tokens retrieved successfully!';
        let errorMessage = 'Error retrieving Tokens:';
        await this.handleRequest(operation, successMessage, errorMessage, res);
    }

    async isAuthenticatedToken(req: Request, res: Response) {
        let tokenData: string = req.body;
        let operation = () => this.service.isAuthenticatedToken(tokenData);
        let successMessage = 'Tokens retrieved successfully!';
        let errorMessage = 'Error retrieving Tokens:';
        await this.handleRequest(operation, successMessage, errorMessage, res);
    }
    async deleteToken(req: Request, res: Response) {
        let tokenData: Date = req.body;
        let operation = () => this.service.deleteToken(tokenData);
        let successMessage = 'Tokens retrieved successfully!';
        let errorMessage = 'Error retrieving Tokens:';
        await this.handleRequest(operation, successMessage, errorMessage, res);
    }
    async createBlacListToken(req: Request, res: Response) {
        let { token, id } = req.body;
        let operation = () => this.service.createBlacListToken(token, id);
        let successMessage = 'Tokens retrieved successfully!';
        let errorMessage = 'Error retrieving Tokens:';
        await this.handleRequest(operation, successMessage, errorMessage, res);
    }


}

export default blackListTokenController;
