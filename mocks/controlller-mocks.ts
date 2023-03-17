import { CreateUserBody } from 'src/dtos/create-user-body';
import { CreateUserOptionsBody } from 'src/dtos/create-user-options-body';

export const wrongUser: CreateUserBody = {
  id: 'wrong-user',
};

export const newUser: CreateUserBody = {
  id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
};

export const OptionUser: CreateUserOptionsBody = {
  id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
  option: 'new option',
};

export const changedOptionUser: CreateUserOptionsBody = {
  id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
  option: 'change option',
};

export const newVote = {
  id: 'de35cc31-1203-4a53-a09b-0ae21e27c7d0',
  votes: 1,
  option: 'change option',
};
