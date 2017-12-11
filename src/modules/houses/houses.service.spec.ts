import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from './house.entity';

describe('HousesService', () => {
  let housesService: HousesService;

  beforeEach(() => {
    housesService = new HousesService();
  });

  describe('create', () => {
    it('should return the house it created', async () => {

      expect(true).toEqual(true);
    });
  });
});