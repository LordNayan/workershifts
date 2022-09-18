import { ShiftService } from "./shift.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateShiftDto } from "./dto/create-shift.dto";
import { UpdateShiftDto } from "./dto/update-shift.dto";
import { Shift } from "@prisma/client";

@Controller("shift")
export class ShiftController {
  @Inject(ShiftService)
  private readonly shiftService: ShiftService;

  @Post()
  create(@Body() createShiftDto: CreateShiftDto): Promise<Shift> {
    return this.shiftService.create(createShiftDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.shiftService.findOne(id);
  }

  @Get("/getAllShifts/:workerId")
  getAllWorkerShifts(@Param("workerId") workerId: string): Promise<Shift[]> {
    return this.shiftService.findAllShifts(workerId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateShiftDto: UpdateShiftDto) {
    return this.shiftService.update(id, updateShiftDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.shiftService.remove(id);
  }
}
