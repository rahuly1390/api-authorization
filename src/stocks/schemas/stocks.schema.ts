import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum IndexType{
    LARGECAP = 'Large Cap',
    MIDCAP = 'Mid Cap',
    SMALLCAP = 'Small Cap',
    FLEXICAP = 'Flexi Cap'
}
export enum MarketCategory{
    CAPITALMARKET = 'Capital Market',
    CURRENCY = 'Currency',
    COMMODITY = 'Commodity',
    DEBT = 'Debt'
}
@Schema({
    timestamps:true
})

export class Stock{
    @Prop()
    stockId:number;

    @Prop()
    stockName:string;

    @Prop()
    description:string;

    @Prop()
    indexName:string;

    @Prop()
    currentprice:number;

    @Prop()
    indexType:IndexType;

    @Prop()
    marketCategory:MarketCategory;
}

export const StockSchema = SchemaFactory.createForClass(Stock)