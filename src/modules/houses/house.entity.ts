import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class House extends Model<House> {
  @Column
  name: string;

  @Column
  key: string;
}
