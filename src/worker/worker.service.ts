import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";

@Injectable()
export class WorkerService {
  constructor(private prismaService: PrismaService) {}

  async create(worker: CreateWorkerDto) {
    try {
      const newWorker = await this.prismaService.worker.create({
        data: {
          ...worker,
        },
      });
      return newWorker;
    } catch (error) {
      throw new HttpException("Invalid Args", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string) {
    try {
      const worker = await this.prismaService.worker.findFirst({
        where: { id },
      });
      if (worker === null) {
        throw new Error();
      }
      return worker;
    } catch (error) {
      throw new HttpException("Worker not found", HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, body: UpdateWorkerDto) {
    try {
      await this.prismaService.worker.update({
        where: { id },
        data: body,
      });
      return await this.prismaService.worker.findFirst({
        where: { id },
      });
    } catch (error) {
      throw new HttpException("Worker not found", HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: string) {
    try {
      //   await this.prismaService.schedule.delete({
      //     where: { workerId: id },
      //   });
      const worker = await this.prismaService.worker.delete({
        where: { id },
      });
      return { success: true, msg: "Worker Deleted Successfully.", worker };
    } catch (error) {
      throw new HttpException("Worker not found", HttpStatus.NOT_FOUND);
    }
  }
}
