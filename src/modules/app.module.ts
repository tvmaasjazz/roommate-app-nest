import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { HousesModule } from './houses/houses.module';
import { UsersModule } from './users/users.module';
import { HousesController } from './houses/houses.controller';
import { UsersController } from './users/users.controller';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { ProfilerMiddleware } from './common/middlewares/profiler.middleware';

@Module({
  modules: [HousesModule, UsersModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(ProfilerMiddleware)
      .forRoutes(HousesController, UsersController);

    consumer
      .apply(loggerMiddleware)
      .forRoutes(HousesController, UsersController);
  }
}
