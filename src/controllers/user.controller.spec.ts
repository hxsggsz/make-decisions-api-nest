import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserModule } from '../user.module';
import { UserRepository } from '../repositories/user-repository';

describe('UserController', () => {
  let userController: UserController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [UserModule],
      providers: [
        {
          provide: UserRepository,
          useValue: {
            GetUser: jest.fn(),
            CreateNewUser: jest.fn(),
            addOptionUser: jest.fn(),
            changeOptionUser: jest.fn(),
            removeOptionUser: jest.fn(),
            incrementVote: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('shoud render the controller', () => {
    expect(userController).toBeDefined();
  });
});
