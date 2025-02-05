import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock } from './schemas/stocks.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class StocksService {
    constructor(
        @InjectModel(Stock.name)
        private stocksModel: mongoose.Model<Stock>
    ){}
    async findAll(query: Query):Promise<Stock[]>{
        // console.log(query);
      const resPerPage = 10;
      const currentPage = Number(query.page) || 1;
      const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword
        ? {
            title: {
              $regex: query.keyword,
              $options: 'i',
            },
          }
        : {};
          const stocks = await this.stocksModel
          .find({ ...keyword })
          .limit(resPerPage)
          .skip(skip);
          return stocks;
      }
  
      async create(stock: Stock): Promise<Stock> {
          const res = await this.stocksModel.create(stock);
          return res;
      }
  
      async findById(id: string): Promise<Stock> {
          const isValidId = mongoose.isValidObjectId(id);
  
          if (!isValidId) {
            throw new BadRequestException('Please enter correct id.');
          }
          
          const stock = await this.stocksModel.findById(id);
      
          if (!stock) {
            throw new NotFoundException('Stock not found.');
          }
      
          return stock;
        }
      
        async updateById(id: string, stock: Stock): Promise<Stock> {
          return await this.stocksModel.findByIdAndUpdate(id, stock, {
            new: true,
            runValidators: true,
          });
        }
      
        async deleteById(id: string): Promise<Stock> {
          return await this.stocksModel.findByIdAndDelete(id);
        }
}
