import {Body, Controller, Delete, Get,  Post, Put, Query} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import {FeedbackDto} from "./feedback.dto";

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() dto: FeedbackDto) {
    return this.feedbackService.create(dto)
  }

  @Get()
  async findAll(@Query() dto: FeedbackDto) {
    return this.feedbackService.findAll(dto)
  }

  @Put()
  async update(@Body() dto: FeedbackDto) {
    if (dto.id)
    return this.feedbackService.update(dto)
  }

  @Delete()
  async delete(@Body() dto: FeedbackDto) {
    if (dto.id)
    return  this.feedbackService.delete(dto)
  }

}
