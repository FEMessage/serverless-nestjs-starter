import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from "./feedback.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.PG_CONNECT_STRING,
      entities: [Feedback],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Feedback])
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
  }
}
