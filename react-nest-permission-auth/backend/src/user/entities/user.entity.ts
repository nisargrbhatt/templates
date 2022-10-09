import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaTypes } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({
  timestamps: true,
  collection: 'User',
})
export class User {
  @Field(() => String)
  _id: SchemaTypes.Types.ObjectId;

  @Field(() => String, {
    description: 'First Name',
    name: 'firstName',
    nullable: false,
  })
  @Prop({
    type: String,
    required: true,
  })
  firstName!: string;

  @Field(() => String, {
    name: 'lastName',
    description: 'Last Name',
    nullable: false,
  })
  @Prop({
    type: String,
    required: true,
  })
  lastName!: string;

  @Field(() => String, {
    name: 'displayName',
    description: 'Nickname to be called by the system',
    nullable: true,
  })
  @Prop({
    type: String,
    required: false,
  })
  displayName?: string;

  @Field(() => String, {
    name: 'email',
    description: 'Email',
    nullable: false,
  })
  @Prop({
    required: true,
    type: String,
  })
  email!: string;

  @Field(() => String, {
    name: 'password',
    description: 'Password',
    nullable: false,
  })
  @Prop({
    required: true,
    type: String,
  })
  password!: string;

  @Field(() => String, {
    name: 'phoneNumber',
    description: 'Phone number of user',
    nullable: true,
  })
  @Prop({
    type: String,
    required: false,
  })
  phoneNumber?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
