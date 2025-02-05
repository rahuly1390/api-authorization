import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IndexType, MarketCategory } from '../schemas/stocks.schema';


export class UpdateStockDto {
@IsNotEmpty()
@IsString()
readonly stockId: number;
  @IsNotEmpty()
  @IsString()
  readonly stockName: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly indexName: string;
  @IsNotEmpty()
  @IsNumber()
  readonly currentprice: number;
  @IsNotEmpty()
  @IsEnum(IndexType, { message: 'Please enter correct index type.' })
  readonly indexType: IndexType;
  @IsNotEmpty()
  @IsEnum(MarketCategory, { message: 'Please enter correct category.' })
  readonly marketCategory: MarketCategory;
}