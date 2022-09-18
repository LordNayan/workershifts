import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkerDto {
  @ApiProperty({
    example: "Nayan",
  })
  @IsString()
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    example: "982729827223",
  })
  @IsString()
  public phoneNumber: string;

  @ApiProperty({
    example: "Some mock address",
  })
  @IsString()
  public address: string;
}
