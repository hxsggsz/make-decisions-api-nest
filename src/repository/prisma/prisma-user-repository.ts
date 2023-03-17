import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

//usa os metodos abstratos do repository para executar as ações no banco
@Injectable()
export class PrismaUserService {
  constructor(private prisma: PrismaService) { }

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
        options: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });
  }

  async AddOptionUser(option: string, id: string) {
    return await this.prisma.options.create({
      data: {
        option,
        User: { connect: { id } },
      },
    });
  }

  async ChangeOptionUser(option: string, id: string) {
    return await this.prisma.options.update({
      where: {
        id,
      },
      data: {
        option,
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
