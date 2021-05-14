import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './blog-post.entity';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { PartialUpdateBlogPostDto } from './dto/partial-update-blog-post.dto';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPost)
    private blogPostRepository: Repository<BlogPost>,
  ) {}

  create(@Body() createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    return this.blogPostRepository.save(createBlogPostDto);
  }

  async findAll(): Promise<BlogPost[]> {
    return this.blogPostRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.blogPostRepository.delete(id);
  }

  async partialUpdate(
    id: string,
    @Body() partialUpdateBlogPostDto: PartialUpdateBlogPostDto,
  ): Promise<void> {
    await this.blogPostRepository.update(id, partialUpdateBlogPostDto);
  }
}
