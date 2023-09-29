"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const user_module_1 = require("./user.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map