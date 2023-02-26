import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
//usa os metodos abstratos do repository para executar as ações no banco
@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(id: string) {
    return await this.prisma.user.create({
      data: {
        id,
      },
    });
  }

  async getUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        options: true,
      },
    });
  }

  async addOptionUser(options: string, userId: string) {
    return await this.prisma.options.create({
      data: {
        options,
        userId,
      },
    });
  }

  async changeOptionUser(options: string, id: string, userId: string) {
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

  async removeOptionUser(id: string) {
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
