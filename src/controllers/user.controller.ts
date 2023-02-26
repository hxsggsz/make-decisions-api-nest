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
import { UserRepository } from '../repository/user-repository';

@Controller()
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get('GetUser/:id')
  async GetUser(@Param('id') id: string) {
    return await this.userRepository.GetUser(id);
  }

  @Post('CreateUser')
  async CreateUser(@Body() body: CreateUserBody) {
    const { id } = body;
    return await this.userRepository.CreateUser(id);
  }

  @Post('CreateOption/:userId')
  async AddOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options } = body;
    return await this.userRepository.AddOptionUser(options, userId);
  }

  @Put('ChangeUserOption/:userId')
  async ChangeOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options, id } = body;

    return await this.userRepository.ChangeOptionUser(options, userId, id);
  }

  @Delete('RemoveUserOption/:id')
  async RemoveOptionUser(@Param('id') id: string) {
    return await this.userRepository.RemoveOptionUser(id);
  }

  @Put('vote/:id')
  async IncrementCounterUser(@Param('id') id: string) {
    return await this.userRepository.IncrementCounterUser(id);
  }

  @Get('test')
  test() {
    return 'test';
  }
}
