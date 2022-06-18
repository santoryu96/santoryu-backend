import { Inject, Injectable } from '@nestjs/common';
import { TestRepository } from '../adapter/out/persistence/repository';
import { ITestRepository } from './port';
import { ObjectId } from 'bson';

@Injectable()
export class TestService {
  constructor(
    @Inject(TestRepository)
    private readonly testRepository: ITestRepository,
  ) {}

  findByUserId(userId: string) {
    return this.testRepository.findByUserId(userId);
  }
}
