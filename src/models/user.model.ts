
import bcrypt from "bcrypt";
import prisma from "./baseModel";

const userModel = prisma.$extends({
  model: {
    user: {
      async uetFindUnique(this: any, username: any) {
        const user = await this.findUnique({
          where: {
            username: username,
          },
        });
        return user;
      },

      async uetCreate(this: any, createdData: any) {
        const { password, ...userData } = createdData;

        const hashedPassword = await bcrypt.hash(password, 10);
        const newData = {
          ...userData,
          password: hashedPassword,
          createdAt: new Date(),
        };

        const createdItem = await this.create({
          data: newData,
        });

        return createdItem;
      },
    },
  }
});

export default userModel;
