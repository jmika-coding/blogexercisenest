import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post /*, Res*/,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { PartialUpdateBlogPostDto } from './dto/partial-update-blog-post.dto';
import { BlogPost } from './interfaces/blog-post.interface';

@Controller('blog-post')
export class BlogPostController {
  constructor(private blogPostService: BlogPostService) {}

  @Post()
  async create(@Body() createBlogPostDto: CreateBlogPostDto) {
    return this.blogPostService.create(createBlogPostDto);
  }

  @Get()
  async findAll(/*@Res() response*/): Promise<BlogPost[]> {
    return this.blogPostService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.blogPostService.remove(id);
  }

  @Patch(':id')
  async partialUpdate(
    @Param('id') id: string,
    @Body() partialUpdateBlogPostDto: PartialUpdateBlogPostDto,
  ): Promise<void> {
    return await this.blogPostService.partialUpdate(
      id,
      partialUpdateBlogPostDto,
    );
  }
}
