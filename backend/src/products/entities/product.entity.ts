import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table({ tableName: 'Product', createdAt: true, updatedAt: true })
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({ allowNull: false, unique: true })
  name: string;

  @Column({})
  price: number;

  @Column({})
  category: string;

  @Column({})
  rating: number;
}
