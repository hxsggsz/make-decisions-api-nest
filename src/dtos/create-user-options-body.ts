import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { CreateUserBody } from './create-user-body';

export class CreateUserOptionsBody {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  option: string;
}
