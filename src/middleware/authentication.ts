import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import BlackListedTokenService from '../services/blackListToken.service';

const blackListedTokenService = new BlackListedTokenService();

class Authentication {
  public authenticateToken(req: Request, res: Response<any, Record<string, any>>, next: NextFunction): void {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).send('Unauthorized');
      return;
    }

    jwt.verify(token, 'your_secret_key', async (err: any, decoded: any) => {
      if (err) {
        res.status(403).send('Invalid token');
        return;
      }

      const isBlacklisted = await blackListedTokenService.isAuthenticatedToken(token);

      if (isBlacklisted) {
        res.status(401).send('Unauthorized');
        return;
      }

      (req as any).userId = decoded.userId;
      next();
    });
  }
}

export default new Authentication();
