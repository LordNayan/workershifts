import { ShiftType } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from "class-validator";

export class CreateShiftDto {
  @IsUUID()
  @IsNotEmpty()
  public workerId: string;

  @IsEnum(ShiftType)
  @IsNotEmpty()
  public type: ShiftType;

  @IsDate()
  @IsNotEmpty()
  public shiftDate: Date;
}
