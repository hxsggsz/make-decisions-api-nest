"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaUserService = class PrismaUserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async CreateUser(id) {
        return await this.prisma.user.create({
            data: {
                id,
            },
        });
    }
    async GetUser(id) {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                options: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });
    }
    async AddOptionUser(option, id) {
        return await this.prisma.options.create({
            data: {
                option,
                User: { connect: { id } },
            },
        });
    }
    async ChangeOptionUser(option, id) {
        return await this.prisma.options.update({
            where: {
                id,
            },
            data: {
                option,
            },
        });
    }
    async RemoveOptionUser(id) {
        return await this.prisma.options.delete({
            where: {
                id,
            },
        });
    }
    async IncrementCounterUser(id) {
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
};
PrismaUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserService);
exports.PrismaUserService = PrismaUserService;
//# sourceMappingURL=prisma-user-repository.js.map