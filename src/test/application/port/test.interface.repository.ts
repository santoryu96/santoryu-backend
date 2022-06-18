import { ObjectId } from 'bson';

export interface ITestRepository {
  findByUserId(userId: string);
}
