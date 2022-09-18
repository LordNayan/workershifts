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
import { ApiTags } from "@nestjs/swagger";
import { WorkerService } from "src/worker/worker.service";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";

@ApiTags("Worker")
@Controller("worker")
export class WorkerController {
  @Inject(WorkerService)
  private readonly workerService: WorkerService;

  @Post("/")
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.workerService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(id, updateWorkerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workerService.remove(id);
  }
}
