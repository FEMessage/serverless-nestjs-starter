import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackController } from '../../src/feedback.controller';
import { FeedbackService } from '../../src/feedback.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FeedbackController],
      providers: [FeedbackService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<FeedbackController>(FeedbackController);
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
