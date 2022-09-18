import { IsNotEmpty, IsString } from "class-validator";

export class UpdateWorkerDto {
  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public address: string;
}
