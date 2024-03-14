import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { User } from '../../dist/user/entities/user.entity';

describe('UserService', () => {
  let service: UserService;
  const mockUserService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [
      //   MongooseModule.forFeature([
      //     {
      //       name: 'User',
      //       schema: UserSchema,
      //     },
      //   ]),
      //   JwtModule.register({ secret: 'aziz' }),
      // ],
      providers: [
        UserService,
        {
          provide: getModelToken('user'),
          useValue: mockUserService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
