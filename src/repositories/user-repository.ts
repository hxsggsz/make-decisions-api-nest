import { User } from '@prisma/client';
// repository são os metodos que vão executar alguma ação no banco de dados
export abstract class UserRepository {
  abstract createUser(id: string): Promise<User>;
  abstract getUser(id: string): Promise<User>;
  abstract addOptionUser(options: string, userId: string): Promise<User>;
  abstract changeOptionUser(
    options: string,
    id: string,
    userId: string,
  ): Promise<User>;
  abstract removeOptionUser(id: string): Promise<User>;
  abstract IncrementCounterUser(id: string): Promise<User>;
}
