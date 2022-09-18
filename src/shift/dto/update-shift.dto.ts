import { ApiProperty } from "@nestjs/swagger";
import { ShiftType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class UpdateShiftDto {
  @ApiProperty({
    example: "Morning",
  })
  @IsEnum(ShiftType)
  @IsNotEmpty()
  public type: ShiftType;

  @ApiProperty({
    example: "2018-03-31T13:34:00.000",
  })
  @IsString()
  @IsNotEmpty()
  public shiftDate: Date;
}
