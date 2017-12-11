import { Sequelize } from 'sequelize-typescript';
import { House } from '../houses/house.entity';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'roommate_app_nest',
      });
      sequelize.addModels([House, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];