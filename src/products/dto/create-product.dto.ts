import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  //el id no deberia estar el id es dado por
  //el backend asi que no debe mandarme el id.

  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  @Type(() => Number)
  price: number;
}
