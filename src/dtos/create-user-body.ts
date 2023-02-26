import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
