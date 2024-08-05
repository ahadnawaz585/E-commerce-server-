import { OTP } from "../Types/otp";
import prisma from "../core/models/baseModel";
const otpModel = prisma.$extends({
  model: {
    oTP: {
      async verifyOTP(this: any, email: string, OTP: number) {
        const otp = await this.findMany({
          where: {
            email: email,
            OTP: {
              equals: OTP,
            },
          },
        });
        return otp;
      },
      async uetgetOTP(this: any, email: string, OTP: number) {
        const otp = await this.findMany({
          where: {
            email: email,
            OTP: OTP,
          },
        });
        return otp;
      },

      async uetDeletOTP(this: any, id: string) {
        await this.delete({
          where: {
            id: id,
          },
        });
      },
      async createOTP(this: any, data: OTP) {
        await this.create({
          data: {
            email: data.email,
            OTP: data.OTP,
          },
        });
      },
    },
  },
});

export default otpModel;
