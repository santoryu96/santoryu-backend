import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Model } from 'mongoose';
import { ITestRepository } from '../../../../application/port';
import { TestEntityModel, TestMongooseDocument } from '../entity/test.entity';

@Injectable()
export class TestRepository implements ITestRepository {
  constructor(
    @InjectModel(TestEntityModel.name)
    private testModel: Model<TestMongooseDocument>,
  ) {}

  async findByUserId(userId: string) {
    // return `userID: ${userId}`;
    // return this.testModel.findOne({ userId: userId });
    return this.testModel.findOne({
      _id: new ObjectId('6256796f51045972751db52a'),
    });
    // return this.testModel.findOne({ user_id: '621affcf09582a160cac1348' });
    // return this.testModel.findOne({ user_id: userId });
    // return this.testModel.find(
    //   { user_id: userId },
    //   {},
    //   { sort: { created_at: -1 } },
    // );
  }
}
