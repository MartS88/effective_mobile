import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IsNotEmpty, IsNumber, IsString, Length, IsBoolean } from 'class-validator';

@Table({ tableName: 'users' })
export class User extends Model<User> {

  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  @IsNumber({}, { message: 'ID must be a number' })
  id: number;

  @ApiProperty({ example: 'Martin', description: 'Name' })
  @Column({ type: DataType.STRING, allowNull: false })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @Length(3, 32, { message: 'Name must contain between 3 and 32 characters' })
  name: string;

  @ApiProperty({ example: 'Smirnoff', description: 'Surname' })
  @Column({ type: DataType.STRING, allowNull: false })
  @IsString({ message: 'Surname must be a string' })
  @IsNotEmpty({ message: 'Surname cannot be empty' })
  @Length(3, 32, { message: 'Surname must contain between 3 and 32 characters' })
  surname: string;

  @ApiProperty({ example: 56, description: 'Age' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  @IsNumber({}, { message: 'Age must be a number' })
  @IsNotEmpty({ message: 'Age cannot be empty' })
  age: number;

  @ApiProperty({ example: 'Male', description: 'Gender' })
  @Column({ type: DataType.STRING, allowNull: false })
  @IsString({ message: 'Gender must be a string' })
  @IsNotEmpty({ message: 'Gender cannot be empty' })
  @Length(4, 6, { message: 'Gender must be either Male or Female' })
  gender: string;

  @ApiProperty({ example: false, description: 'Indicates status of problem' })
  @Column({ type: DataType.BOOLEAN, allowNull: false})
  @IsBoolean({ message: 'Problems must be a boolean' })
  @IsNotEmpty({ message: 'Problems cannot be empty' })
  problems: boolean;
}
