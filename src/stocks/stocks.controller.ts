import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { Stock } from './schemas/stocks.schema';
import { CreateStockDto } from './dto/create-stocks.dto';
import { Query as ExpressQuery} from 'express-serve-static-core';
import { UpdateStockDto } from './dto/update-stocks.dto';

@Controller('stocks')
export class StocksController {
    constructor(private stocksService: StocksService) {}

    @Get()
    async getAllStocks(@Query() query: ExpressQuery): Promise<Stock[]> {
      return this.stocksService.findAll(query);
    }

    @Post()
  async createStocks(
    @Body()
    stock:CreateStockDto,
  ): Promise<Stock> {
    return this.stocksService.create(stock);
  }

  @Get(':id')
  async getStock(
    @Param('id')
    id: string,
  ): Promise<Stock> {
    return this.stocksService.findById(id);
  }

  @Put(':id')
  async updateStock(
    @Param('id')
    id: string,
    @Body()
    stock: UpdateStockDto,
  ): Promise<Stock> {
    return this.stocksService.updateById(id, stock);
  }

  @Delete(':id')
  async deleteStock(
    @Param('id')
    id: string,
  ): Promise<Stock> {
    return this.stocksService.deleteById(id);
  }
}
