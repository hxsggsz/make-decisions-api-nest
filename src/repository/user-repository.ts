export abstract class UserRepository {
  abstract CreateUser(id: string);
  abstract GetUser(id: string);
  abstract AddOptionUser(options: string, id: string);
  abstract ChangeOptionUser(options: string, id: string);
  abstract RemoveOptionUser(id: string);
  abstract IncrementCounterUser(id: string);
}
