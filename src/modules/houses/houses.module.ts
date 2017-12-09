import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { housesProviders } from './houses.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [HousesController],
  components: [
    HousesService,
    ...housesProviders,
  ],
})
export class HousesModule {}
