import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(1)
  firstName?: string;

  @Length(1)
  lastName?: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  email: string;

  @Length(6, 32, { message: 'Пароль должен быть минимум 6 символов' })
  password: string;
}
