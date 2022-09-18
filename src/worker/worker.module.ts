import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { WorkerController } from "./worker.controller";
import { WorkerService } from "./worker.service";

@Module({
  controllers: [WorkerController],
  providers: [WorkerService, PrismaService],
})
export class WorkerModule {}
