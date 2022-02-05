import { Module } from '@nestjs/common';
import { usersProviders } from './user.provider';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService,...usersProviders],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
