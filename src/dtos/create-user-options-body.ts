import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateUserOptionsBody {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 45)
  option: string;
}
