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
import { UserRepository } from '../repository/user-repository';
import { CreateUserOptionsBody } from '../dtos/create-user-options-body';

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

  @Post('CreateOption')
  async AddOptionUser(
    @Body() body: CreateUserOptionsBody,
  ) {
    const { option, id } = body;
    return await this.userRepository.AddOptionUser(option, id);
  }

  @Put('ChangeUserOption')
  async ChangeOptionUser(
    @Body() body: CreateUserOptionsBody,
  ) {
    const { option, id } = body;

    return await this.userRepository.ChangeOptionUser(option, id);
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
