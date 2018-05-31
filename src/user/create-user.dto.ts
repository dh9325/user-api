export class CreateUserDto {
  readonly forename: string;
  readonly surname: string;
  readonly email: string;
  readonly created = new Date();
}
