import { PrismaService } from '../../database/prisma.service';
export declare class PrismaUserService {
    private prisma;
    constructor(prisma: PrismaService);
    CreateUser(id: string): Promise<import(".prisma/client").User>;
    GetUser(id: string): Promise<import(".prisma/client").User & {
        options: import(".prisma/client").Options[];
    }>;
    AddOptionUser(option: string, id: string): Promise<import(".prisma/client").Options>;
    ChangeOptionUser(option: string, id: string): Promise<import(".prisma/client").Options>;
    RemoveOptionUser(id: string): Promise<import(".prisma/client").Options>;
    IncrementCounterUser(id: string): Promise<import(".prisma/client").Options>;
}
