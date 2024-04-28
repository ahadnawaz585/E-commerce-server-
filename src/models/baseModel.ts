import { Prisma, PrismaClient } from "@prisma/client";


const basePrisma = new PrismaClient({
  log: ["query"],
});

const prisma = basePrisma.$extends({
  model: {
    $allModels: {
      async uetSoftDelete(this: any, id: string) {
        const existingItem = await this.findUnique({ where: { id } });
        if (existingItem.isDeleted === null) {
          await this.update({
            where: { id },
            data: { isDeleted: new Date() },
          });
        }
      },

      async uetRestore(this: any, id: string) {
        const existingItem = await this.findUnique({ where: { id } });
        if (existingItem.isDeleted !== null) {
          await this.update({
            where: { id },
            data: { isDeleted: null },
          });
        }
      },

      async uetSearch(
        this: any,
        searchTerm: string | string[],
        columns: string[],
        pageNumber: number = 1,
        pageSize: number = 10
      ) {
        const searchTermsArray = Array.isArray(searchTerm)
          ? searchTerm
          : [searchTerm];
        let mainCondition = {};

        for (let i = 0; i < searchTermsArray.length; i++) {
          const term = searchTermsArray[i];
          const condition = {
            OR: columns.map((column) => ({
              [column]: {
                mode: "insensitive",
                contains: term,
              },
            })),
          };

          if (i === 0) {
            mainCondition = condition;
          } else {
            mainCondition = {
              AND: [mainCondition, condition],
            };
          }
        }

        const offset = (pageNumber - 1) * pageSize;

        const [data, totalSize] = await Promise.all([
          this.findMany({
            where: {
              isDeleted: null,
              ...mainCondition,
            },
            skip: offset,
            take: pageSize,
          }),
          this.count({
            where: {
              isDeleted: null,
              ...mainCondition,
            },
          }),
        ]);

        return { data, totalSize };
      },

      async uetCreate(this: any, createdData: any) {
        if (!Array.isArray(createdData)) {
          createdData = [createdData];
        }

        const createdItems = [];

        for (const data of createdData) {
          let newData = {
            ...data,
            createdAt: new Date(),
          };

          const createdItem = await this.create({
            data: newData,
          });

          createdItems.push(createdItem);
        }

        return createdItems;
      },

      async uetUpdate(this: any, updateId: string, updatedData: any) {
        let newData = {
          ...updatedData,
          updatedAt: new Date(),
        };
        const updatedItem = await this.update({
          where: { id: updateId },
          data: newData,
        });
        return updatedItem;
      },

      async uetFindById(this: any, id: string) {
        const data = await this.findUnique({
          where: {
            id: id,
            isDeleted: null,
          },
        });

        return data;
      },

      async uetCount(this: any) {
        const count = await this.count({
          where: {
            isDeleted: null,
          },
        });
        return count;
      },

      async uetPgFindMany(this: any, page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;

        const data = await this.findMany({
          where: {
            isDeleted: null,
          },
          take: pageSize,
          skip: skip,
        });

        const totalSize = await this.count({
          where: {
            isDeleted: null,
          },
        });

        return { data, totalSize };
      },

      async uetFindMany(this: any) {
        const data = await this.findMany({
          where: {
            isDeleted: null,
          },
        });

        return data;
      },

     
    },
  },
});

export default prisma;
