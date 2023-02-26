import { CreateUserBody } from '../dtos/create-user-body';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserOptionsBody } from '../dtos/create-user-options-body';
import { UserService } from '../user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('GetUser/:id')
  async GetUser(@Param('id') id: string) {
    return await this.userService.GetUser(id);
  }

  @Post('CreateUser')
  async CreateUser(@Body() body: CreateUserBody) {
    const { id } = body;
    return await this.userService.CreateUser(id);
  }

  @Post('CreateOption/:userId')
  async AddOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options } = body;
    return await this.userService.AddOptionUser(options, userId);
  }

  @Put('ChangeUserOption/:userId')
  async ChangeOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options, id } = body;

    return await this.userService.ChangeOptionUser(options, userId, id);
  }

  @Delete('RemoveUserOption/:id')
  async RemoveOptionUser(@Param('id') id: string) {
    return await this.userService.RemoveOptionUser(id);
  }

  @Put('vote/:id')
  async IncrementCounterUser(@Param('id') id: string) {
    return await this.userService.IncrementCounterUser(id);
  }

  @Get('test')
  test() {
    return 'test';
  }
}