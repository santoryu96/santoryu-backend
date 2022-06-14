import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { MongooseModule } from '@nestjs/mongoose';
// const DB = 'mongodb+srv://logadmin:Tmvkfmxk0423@log.oa8nf.mongodb.net';
const DB = 'mongodb://localhost:27019/logs';
@Module({
  imports: [
    MongooseModule.forRoot(DB, {
      connectionName: 'logs',
    }),
    // TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
