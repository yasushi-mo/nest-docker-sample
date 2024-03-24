import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', // Docker Compose service name
      port: 3306,
      username: 'username',
      password: 'password',
      database: 'nest_app_db',
      entities: [User],
      synchronize: true, // Note: Disable synchronize in production
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
