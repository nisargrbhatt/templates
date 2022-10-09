import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create(createUserInput);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: Types.ObjectId | string) {
    return this.userModel.findById(id);
  }

  update(id: Types.ObjectId | string, updateUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate(
      {
        _id: id,
      },
      updateUserInput,
      {
        new: true,
      },
    );
  }

  remove(id: Types.ObjectId | string) {
    return this.userModel.findOneAndDelete({
      _id: id,
    });
  }
}
