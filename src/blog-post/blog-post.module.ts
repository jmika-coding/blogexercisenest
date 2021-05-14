import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostController } from './blog-post.controller';
import { BlogPost } from './blog-post.entity';
import { BlogPostService } from './blog-post.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
