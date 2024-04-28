import otpModel from "../models/otp.model";
import { OTP } from "../Types/otp";

class OtpService {
  async creatOTP(data:OTP) {
    return await otpModel.oTP.createOTP(data);
  }

  async veriyOTP(email: string,otp:number):Promise <boolean> {
    return await otpModel.oTP.verifyOTP(email,otp);
  }

  async getOTP(email: string,otp:number):Promise <OTP> {
    return await otpModel.oTP.uetgetOTP(email,otp);
  }

  async deleteOTP(id: string) {
    return await otpModel.oTP.uetDeletOTP(id);
  }

}

export default OtpService;
