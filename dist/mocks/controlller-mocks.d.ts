import { CreateUserBody } from 'src/dtos/create-user-body';
import { CreateUserOptionsBody } from 'src/dtos/create-user-options-body';
export declare const wrongUser: CreateUserBody;
export declare const newUser: CreateUserBody;
export declare const OptionUser: CreateUserOptionsBody;
export declare const changedOptionUser: CreateUserOptionsBody;
export declare const newVote: {
    id: string;
    votes: number;
    option: string;
};
