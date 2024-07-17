import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCommentDto: Prisma.CommentCreateInput) {
    return this.databaseService.comment.create({ data: createCommentDto });
  }

  async findAll(page: number, limit: number) {
    return this.databaseService.comment.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    return this.databaseService.comment.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.comment.findUnique({ where: { id } });
  }

  async update(id: number, updateCommentDto: Prisma.CommentUpdateInput) {
    return this.databaseService.comment.update({
      where: {
        id,
      },
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.comment.delete({
      where: { id },
    });
  }
}
