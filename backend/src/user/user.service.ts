import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      return this.userModel.findByIdAndUpdate(id, {
        ...updateUserDto,
        password: hashedPassword,
      });
    }
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
