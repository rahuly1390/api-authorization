import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    BookModule,
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    StocksModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
