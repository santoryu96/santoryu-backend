import { Logger, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {
  TestEntityModel,
  TestMongooseSchema,
} from './adapter/out/persistence/entity/test.entity';
import { TestRepository } from './adapter/out/persistence/repository';
import { TestService } from './application/test.service';
import { TestController } from './adapter/in/web/test.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature(
      [
        {
          name: TestEntityModel.name,
          schema: TestMongooseSchema,
        },
      ],
      'logs',
    ),
  ],
  controllers: [TestController],
  providers: [Logger, TestService, TestRepository],
})
export class TestModule {}
