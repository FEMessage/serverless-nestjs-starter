import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Feedback} from "./feedback.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {
  }

  async create(dto) {
    await this.feedbackRepository.insert(dto)
  }

  async findAll(dto) {
    let result = await this.feedbackRepository.find({
      order: {
        id: 'DESC'
      }
    })

    return result
  }

  async update(dto) {
    await this.feedbackRepository.update(dto.id, dto)
  }

  async delete(dto) {
    await this.feedbackRepository.delete(dto.id)
  }

}
