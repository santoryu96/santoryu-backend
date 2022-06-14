import { Injectable } from '@nestjs/common';
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

  async findByUserId(userId: ObjectId) {
    return this.testModel.find(
      { user_id: userId },
      {},
      { sort: { created_at: -1 } },
    );
  }
}
