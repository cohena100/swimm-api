import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, DatabaseModule, PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
