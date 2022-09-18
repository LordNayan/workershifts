import { ShiftType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class UpdateShiftDto {
  @IsEnum(ShiftType)
  @IsNotEmpty()
  public type: ShiftType;

  @IsString()
  @IsNotEmpty()
  public shiftDate: Date;
}
