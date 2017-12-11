import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';

describe('HousesController', () => {
  let housesController: HousesController;
  let housesService: HousesService;

  beforeEach(() => {
    housesService = new HousesService();
    housesController = new HousesController(housesService);
  });

  describe('create', () => {
    it('should return a house', async () => {
      const result = 'a house';
      jest.spyOn(housesService, 'create').mockImplementation(() => result);

      expect(await housesController.create(new CreateHouseDto)).toBe(result);
    });
  });

  describe('findHouseById', () => {
    it('should return a house', async () => {
      const result = 'a house';
      jest.spyOn(housesService, 'findHouseById').mockImplementation(() => result);

      expect(await housesController.findHouseById('1')).toBe(result);
    });
  });
});
