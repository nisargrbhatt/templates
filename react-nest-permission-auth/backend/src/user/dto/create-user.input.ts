import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, {
    description: 'First Name',
    name: 'firstName',
    nullable: false,
  })
  firstName!: string;

  @Field(() => String, {
    name: 'lastName',
    description: 'Last Name',
    nullable: false,
  })
  lastName!: string;

  @Field(() => String, {
    name: 'displayName',
    description: 'Nickname to be called by the system',
    nullable: true,
  })
  displayName?: string;

  @Field(() => String, {
    name: 'email',
    description: 'Email',
    nullable: false,
  })
  email!: string;

  @Field(() => String, {
    name: 'password',
    description: 'Password',
    nullable: false,
  })
  password!: string;

  @Field(() => String, {
    name: 'phoneNumber',
    description: 'Phone number of user',
    nullable: true,
  })
  phoneNumber?: string;
}
