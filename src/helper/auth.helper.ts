import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthHelper {

  static getTokenFromHeader(req: Request): string | null {
    if (req.headers && req.headers.authorization) {
      return req.headers.authorization.split(" ")[1] || null;
    }
    return null;
  }
  
  static getUserIdFromHeader(req: Request): string | null {
    if (req.headers && req.headers.authorization) {
      const authorization = req.headers.authorization.split(" ")[1];
      try {
        const decoded: any = jwt.verify(authorization, "your_secret_key");
        return decoded.userId;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}

export default  AuthHelper;