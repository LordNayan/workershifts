import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkerDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public phoneNumber: string;

  @IsString()
  public address: string;
}
