import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';

export type TestMongooseDocument = TestEntityModel & Document;

@Schema({
  collection: 'logs_raw',
  // _id: true,
})
export class TestEntityModel {
  @Prop()
  userId: string;
}

export const TestMongooseSchema = SchemaFactory.createForClass(TestEntityModel);
