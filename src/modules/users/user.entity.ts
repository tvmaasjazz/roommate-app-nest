import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { House } from '../houses/house.entity';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  username: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  phone: string;

  @Column
  imageUrl: string;

  @ForeignKey(() => House)
  @Column
  houseId: number;

  @BelongsTo(() => House)
  house;
}
