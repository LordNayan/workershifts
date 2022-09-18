import { ApiProperty } from "@nestjs/swagger";
import { ShiftType } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from "class-validator";

export class CreateShiftDto {
  @ApiProperty({
    example: "ca5ec02d-5f22-47f1-bfac-dadec5ad1e80",
  })
  @IsUUID()
  @IsNotEmpty()
  public workerId: string;

  @ApiProperty({
    example: "Morning",
  })
  @IsEnum(ShiftType)
  @IsNotEmpty()
  public type: ShiftType;

  @ApiProperty({
    example: "2018-03-31T13:34:00.000",
  })
  @IsDate()
  @IsNotEmpty()
  public shiftDate: Date;
}
