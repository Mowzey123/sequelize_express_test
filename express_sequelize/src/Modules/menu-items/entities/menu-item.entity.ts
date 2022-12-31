import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';

@Table({
  tableName: 'menu_item',
  updatedAt: false,
})
export default class MenuItem extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  name: string;

  @Column
  url: string;

  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  @ForeignKey(() => MenuItem)
  parentId: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: Date;

  @HasMany(() => MenuItem)
  children: MenuItem[];
}
