import { Test, TestingModule } from "@nestjs/testing";
import { ShiftController } from "./shift.controller";
import { ShiftService } from "./shift.service";

describe("ShiftController", () => {
  let controller: ShiftController;
  const shiftResult = {
    id: "e29b15ac-d267-43df-b588-612897ebe5cc",
    workerId: "071c17d5-cc96-4574-948c-5320e555abd5",
    type: "MidDay",
    shiftDate: "2018-03-31T00:00:00.000Z",
    created_at: "2022-09-18T09:51:25.948Z",
    updated_at: "2022-09-18T09:51:25.950Z",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShiftController],
      providers: [
        {
          provide: ShiftService,
          useValue: {
            create: jest.fn(() => shiftResult),
          },
        },
      ],
    }).compile();

    controller = module.get<ShiftController>(ShiftController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should create shift", () => {
    const shift = controller.create({
      workerId: "071c17d5-cc96-4574-948c-5320e555abd5",
      type: "MidDay",
      shiftDate: new Date("2022-03-17T13:34:00.000"),
    });
    expect(shift).toEqual(shiftResult);
  });
});
