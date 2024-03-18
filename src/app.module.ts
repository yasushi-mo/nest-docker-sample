import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', // Docker Compose service name
      port: 3306,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
      entities: [User],
      synchronize: true, // Note: Disable synchronize in production
    }),
  ],
})
export class AppModule {}
