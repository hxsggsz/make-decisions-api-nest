export declare abstract class UserRepository {
    abstract CreateUser(id: string): any;
    abstract GetUser(id: string): any;
    abstract AddOptionUser(options: string, id: string): any;
    abstract ChangeOptionUser(options: string, id: string): any;
    abstract RemoveOptionUser(id: string): any;
    abstract IncrementCounterUser(id: string): any;
}
