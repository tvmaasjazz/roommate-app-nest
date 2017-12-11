import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class House extends Model<House> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  key: string;

  @HasMany(() => User)
  users;
}
