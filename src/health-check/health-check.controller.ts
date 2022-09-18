import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("Health Check")
@Controller()
export class HealthCheckController {
  @Get("/health-check")
  healthCheck() {
    return { status: 200 };
  }
}
