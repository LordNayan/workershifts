import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Shift } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateShiftDto } from "./dto/create-shift.dto";
import { UpdateShiftDto } from "./dto/update-shift.dto";

@Injectable()
export class ShiftService {
  constructor(private prismaService: PrismaService) {}

  async create(shift: CreateShiftDto) {
    try {
      shift.shiftDate = new Date(shift.shiftDate);
      const newShift = await this.prismaService.shift.create({
        data: {
          ...shift,
        },
      });
      return newShift;
    } catch (error) {
      const { statusCode, errorMessage } = handleError(error);
      throw new HttpException(errorMessage, statusCode);
    }
  }

  async findOne(id: string) {
    try {
      const shift = await this.prismaService.shift.findFirst({
        where: { id: id },
      });
      if (shift === null) {
        throw new Error();
      }
      return shift;
    } catch (error) {
      throw new HttpException("Shift not found", HttpStatus.NOT_FOUND);
    }
  }

  async findAllShifts(workerId: string): Promise<Shift[]> {
    try {
      const shifts = await this.prismaService.shift.findMany({
        where: { workerId },
      });
      return shifts;
    } catch (error) {
      throw new HttpException("Worker not found", HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, body: UpdateShiftDto) {
    try {
      body.shiftDate = new Date(body.shiftDate);
      await this.prismaService.shift.update({
        where: { id },
        data: body,
      });
      return await this.prismaService.shift.findFirst({
        where: { id },
      });
    } catch (error) {
      const { statusCode, errorMessage } = handleError(error);
      throw new HttpException(errorMessage, statusCode);
    }
  }

  async remove(id: string) {
    try {
      //   await this.prismaService.shift.delete({
      //     where: { scheduleId: id },
      //   });
      await this.prismaService.shift.delete({
        where: { id },
      });
      return { success: true, msg: "shift Deleted Successfully." };
    } catch (error) {
      throw new HttpException("Shift not found", HttpStatus.NOT_FOUND);
    }
  }
}

function handleError(error) {
  let statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  let errorMessage: string = <string>error.message;
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      errorMessage =
        "There is a unique constraint violation, a new shift cannot be created for this worker.";
      statusCode = HttpStatus.CONFLICT;
    }
    if (error.code === "P2003") {
      errorMessage = "Invalid worker.";
      statusCode = HttpStatus.NOT_FOUND;
    }
  }
  return { statusCode, errorMessage };
}
