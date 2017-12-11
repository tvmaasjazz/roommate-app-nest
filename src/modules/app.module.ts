import { Module } from '@nestjs/common';
import { HousesModule } from './houses/houses.module';
import { UsersModule } from './users/users.module';

@Module({
  modules: [HousesModule, UsersModule],
})
export class ApplicationModule {}
