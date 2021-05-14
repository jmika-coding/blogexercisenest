import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPost } from './blog-post/blog-post.entity';
//import { BlogPostController } from './blog-post/blog-post.controller';
//import { BlogPostService } from './blog-post/blog-post.service';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [
    BlogPostModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), { entities: [BlogPost] }),
    }),
  ],
  controllers: [AppController] /*, BlogPostController*/,
  providers: [AppService] /*, BlogPostService*/,
})
export class AppModule {}
