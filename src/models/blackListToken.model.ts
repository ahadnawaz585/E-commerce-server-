
import prisma from "./baseModel";

const blacklistTokenModel = prisma.$extends({
  model: {
    blacklistToken: {
        async uetBlackListToken(this: any, token: string, userId: string) {
          const result = await this.create({
            data: {
              token,
              userId,
              createdAt: new Date(),
            },
          });
          return result;
        },
        async isTokenBlacklisted(this: any, token: string): Promise<boolean> {
          const result = await this.findUnique({
            where: {
              token,
            },
          });
          return !!result;
        },
  
        async uetDeleteTokenBlackListed(yesterday:Date){
          await prisma.blacklistToken.deleteMany({
            where: {
              createdAt: {
                lt: yesterday,
              },
            },
          });
        }
      },
  },
});

export default blacklistTokenModel;
