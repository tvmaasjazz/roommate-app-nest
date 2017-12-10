import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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
}
