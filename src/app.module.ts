import { Module } from "@nestjs/common";
import { HealthCheckModule } from "./health-check/health-check.module";
import { ShiftModule } from "./shift/shift.module";
import { WorkerModule } from "./worker/worker.module";

@Module({
  imports: [HealthCheckModule, WorkerModule, ShiftModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
