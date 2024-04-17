import blacklistTokenModel from "../models/blackListToken.model";
import { BlacklistToken } from "../Types/blackList";

class BlacklistTokenervice {
  async getAllTokens(): Promise<BlacklistToken[]> {
    return await blacklistTokenModel.blacklistToken.uetFindMany();
  }

  async createBlacListToken(
    token: string,
    id: string
  ): Promise<BlacklistToken | BlacklistToken[]> {
    return await blacklistTokenModel.blacklistToken.uetBlackListToken(token, id);
  }

  async isAuthenticatedToken(token: string): Promise<boolean> {
    return await blacklistTokenModel.blacklistToken.isTokenBlacklisted(token);
  }

  async deleteToken(yesterday: Date) {
    return await blacklistTokenModel.blacklistToken.uetDeleteTokenBlackListed(yesterday);
  }
}

export default BlacklistTokenervice;
