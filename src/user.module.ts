import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './database/prisma.service';
import { UserRepository } from './repository/user-repository';
import { PrismaUserService } from './repository/prisma/prisma-user-repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserService,
    },
  ],
})
export class UserModule {}
