import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger Init
  const config = new DocumentBuilder()
    .setTitle("Planner Service")
    .setDescription("Api documentation for planner service apis")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("planner/docs", app, document);
  await app.listen(3000);
}
bootstrap();
