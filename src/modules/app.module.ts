import { Module } from '@nestjs/common';
import { HousesModule } from './houses/houses.module';

@Module({
  modules: [HousesModule],
})
export class ApplicationModule {}
