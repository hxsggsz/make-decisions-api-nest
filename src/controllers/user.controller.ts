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

  @Put('ChangeUserOption')
  async ChangeOptionUser(@Body() body: CreateUserOptionsBody) {
    const { options, id } = body;

    return await this.userRepository.ChangeOptionUser(options, id);
  }

  @Delete('RemoveUserOption')
  async RemoveOptionUser(@Body() body: CreateUserOptionsBody) {
    const { id } = body;
    return await this.userRepository.RemoveOptionUser(id);
  }

  @Put('Vote')
  async IncrementCounterUser(@Body() body: CreateUserOptionsBody) {
    const { id } = body;
    return await this.userRepository.IncrementCounterUser(id);
  }
}
