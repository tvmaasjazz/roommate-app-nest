import { House } from './house.entity';

export const housesProviders = [
  {
    provide: 'HousesRepository',
    useValue: House,
  },
];