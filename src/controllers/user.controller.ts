import { CreateUserBody } from 'src/dtos/create-user-body';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository';
import { CreateUserOptionsBody } from 'src/dtos/create-user-options-body';

@Controller()
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get('GetUser/:id')
  async GetUser(@Param('id') id: string) {
    return await this.userRepository.getUser(id);
  }

  @Post('CreateUser')
  async CreateNewUser(@Body() body: CreateUserBody) {
    const { id } = body;
    return await this.userRepository.createUser(id);
  }

  @Post('CreateOption/:userId')
  async addOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options } = body;
    return await this.userRepository.addOptionUser(options, userId);
  }

  @Put('ChangeUserOption/:userId')
  async changeOptionUser(
    @Param('userId') userId: string,
    @Body() body: CreateUserOptionsBody,
  ) {
    const { options, id } = body;

    return await this.userRepository.changeOptionUser(options, userId, id);
  }

  @Delete('RemoveUserOption/:id')
  async removeOptionUser(@Param('id') id: string) {
    return await this.userRepository.removeOptionUser(id);
  }

  @Put('vote/:id')
  async incrementVote(@Param('id') id: string) {
    return await this.userRepository.IncrementCounterUser(id);
  }

  @Get('test')
  test() {
    return 'test';
  }
}
