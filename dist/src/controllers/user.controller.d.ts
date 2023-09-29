import { CreateUserBody } from '../dtos/create-user-body';
import { UserRepository } from '../repository/user-repository';
import { CreateUserOptionsBody } from '../dtos/create-user-options-body';
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    GetUser(id: string): Promise<any>;
    CreateUser(body: CreateUserBody): Promise<any>;
    AddOptionUser(id: string, body: CreateUserOptionsBody): Promise<any>;
    ChangeOptionUser(body: CreateUserOptionsBody): Promise<any>;
    RemoveOptionUser(id: string): Promise<any>;
    IncrementCounterUser(id: string): Promise<any>;
}
