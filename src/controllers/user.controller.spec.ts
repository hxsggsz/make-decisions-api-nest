import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserRepository } from '../repository/user-repository';
import {
  newUser,
  OptionUser,
  changedOptionUser,
  newVote,
  wrongUser,
} from '../../mocks/controlller-mocks';

describe('UserController', () => {
  let userController: UserController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserRepository,
          useValue: {
            GetUser: jest.fn().mockResolvedValue(newUser),
            CreateUser: jest.fn().mockResolvedValue(newUser),
            AddOptionUser: jest.fn().mockResolvedValue(OptionUser),
            ChangeOptionUser: jest.fn().mockResolvedValue(changedOptionUser),
            RemoveOptionUser: jest.fn(),
            IncrementCounterUser: jest.fn().mockResolvedValue(newVote),
          },
        },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('shoud render the controller', () => {
    expect(userController).toBeDefined();
  });

  describe('Create user controller', () => {
    it('should create a new user', async () => {
      const result = await userController.CreateUser(newUser);

      expect(result).toEqual(newUser);
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
      jest.spyOn(userController, 'CreateUser').mockRejectedValueOnce(wrongUser);

      expect(userController.CreateUser).not.toHaveBeenCalled();
      expect(userController.CreateUser).not.toEqual(wrongUser);
    });
  });

  describe('create option controller', () => {
    it('should create a new option', async () => {
      const result = await userController.AddOptionUser(OptionUser);

      expect(result).toEqual(OptionUser);
      expect(typeof newUser.id).toBe('string');
      expect(typeof OptionUser.option).toBe('string');
    });

    it('should not create a new user', async () => {
      jest
        .spyOn(userController, 'AddOptionUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.AddOptionUser).not.toHaveBeenCalled();
      expect(userController.AddOptionUser).rejects.toThrowError();
    });
  });

  describe('change option controller', () => {
    it('should change an current option', async () => {
      const result = await userController.ChangeOptionUser(changedOptionUser);

      expect(result).toEqual(changedOptionUser);
    });

    it('should not change the option', async () => {
      jest
        .spyOn(userController, 'ChangeOptionUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.ChangeOptionUser).not.toHaveBeenCalled();
      expect(userController.ChangeOptionUser).rejects.toThrowError();
    });
  });

  describe('remove option controller', () => {
    it('should remove the option', async () => {
      const result = await userController.RemoveOptionUser(OptionUser);

      expect(result).toBeUndefined();
    });

    it('should not change the option', async () => {
      jest
        .spyOn(userController, 'RemoveOptionUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.RemoveOptionUser).not.toHaveBeenCalled();
      expect(userController.RemoveOptionUser).rejects.toThrowError();
    });
  });

  describe('increment counter controller', () => {
    it('should by 1 the votes options', async () => {
      const result = await userController.IncrementCounterUser(newVote);

      expect(result).toEqual(newVote);
      expect(typeof newVote.votes).toBe('number');
    });

    it('should not increment the votes', async () => {
      jest
        .spyOn(userController, 'IncrementCounterUser')
        .mockRejectedValueOnce(new Error());

      expect(userController.IncrementCounterUser).not.toHaveBeenCalled();
      expect(userController.IncrementCounterUser).rejects.toThrowError();
    });
  });
});
