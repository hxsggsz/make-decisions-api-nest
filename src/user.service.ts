import { PrismaService } from './database/prisma.service';

//usa os metodos abstratos do repository para executar as ações no banco
export class UserService {
  constructor(private prisma: PrismaService) {}

  async CreateUser(id: string) {
    return await this.prisma.user.create({
      data: {
        id,
      },
    });
  }

  async GetUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        options: true,
      },
    });
  }

  async AddOptionUser(options: string, userId: string) {
    return await this.prisma.options.create({
      data: {
        options,
        userId,
      },
    });
  }

  async ChangeOptionUser(options: string, id: string, userId: string) {
    return await this.prisma.options.update({
      where: {
        id,
      },
      data: {
        options,
        userId,
      },
    });
  }

  async RemoveOptionUser(id: string) {
    return await this.prisma.options.delete({
      where: {
        id,
      },
    });
  }

  async IncrementCounterUser(id: string) {
    return await this.prisma.options.update({
      where: {
        id,
      },
      data: {
        votes: {
          increment: 1,
        },
      },
    });
  }
}
