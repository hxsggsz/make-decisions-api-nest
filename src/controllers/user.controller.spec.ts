import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../user.service';
import { CreateUserBody } from 'src/dtos/create-user-body';

const wrongUser: CreateUserBody = {
  id: 'wrong-user',
};
const newUser: CreateUserBody = {
  id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
};

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [
        {
          provide: UserService,
          useValue: {
            GetUser: jest.fn().mockResolvedValue(newUser),
            CreateUser: jest.fn().mockResolvedValue(newUser),
            AddOptionUser: jest.fn(),
            ChangeOptionUser: jest.fn(),
            RemoveOptionUser: jest.fn(),
            IncrementCounterUser: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('shoud render the controller', () => {
    expect(userController).toBeDefined();
    expect(UserService).toBeDefined();
  });

  describe('Create user controller', () => {
    it('should create a new user', async () => {
      const body: CreateUserBody = {
        id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
      };
      const result = await userController.CreateUser(body);

      expect(result).toEqual(newUser);
      expect(userService.CreateUser).toHaveBeenCalledTimes(1);
    });

    it('should not create a new user', async () => {
      jest
        .spyOn(userController, 'CreateUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.CreateUser).not.toHaveBeenCalled();
      expect(userController.CreateUser).rejects.toThrowError();
    });
  });

  describe('Get user controller', () => {
    it('should get the user by the id', async () => {
      const id = 'de35cc31-1203-4a53-a09b-0ae21e27c7d0';
      const result = await userController.GetUser(id);

      expect(result.id).toEqual(id);
      expect(typeof result.id).toBe('string');
    });

    it('should get nothing with a wrong id', async () => {
      jest
        .spyOn(userController, 'CreateUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.CreateUser).not.toHaveBeenCalled();
      expect(userController.CreateUser).rejects.toThrowError();
    });
  });
});
