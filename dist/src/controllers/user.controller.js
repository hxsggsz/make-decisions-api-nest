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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_body_1 = require("../dtos/create-user-body");
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user-repository");
const create_user_options_body_1 = require("../dtos/create-user-options-body");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async GetUser(id) {
        return await this.userRepository.GetUser(id);
    }
    async CreateUser(body) {
        const { id } = body;
        return await this.userRepository.CreateUser(id);
    }
    async AddOptionUser(id, body) {
        const { option } = body;
        return await this.userRepository.AddOptionUser(option, id);
    }
    async ChangeOptionUser(body) {
        const { option, id } = body;
        return await this.userRepository.ChangeOptionUser(option, id);
    }
    async RemoveOptionUser(id) {
        return await this.userRepository.RemoveOptionUser(id);
    }
    async IncrementCounterUser(id) {
        return await this.userRepository.IncrementCounterUser(id);
    }
};
__decorate([
    (0, common_1.Get)('GetUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "GetUser", null);
__decorate([
    (0, common_1.Post)('CreateUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_body_1.CreateUserBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "CreateUser", null);
__decorate([
    (0, common_1.Post)('CreateOption/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_options_body_1.CreateUserOptionsBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "AddOptionUser", null);
__decorate([
    (0, common_1.Put)('ChangeUserOption'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_options_body_1.CreateUserOptionsBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ChangeOptionUser", null);
__decorate([
    (0, common_1.Delete)('RemoveUserOption/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "RemoveOptionUser", null);
__decorate([
    (0, common_1.Put)('Vote/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "IncrementCounterUser", null);
UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map